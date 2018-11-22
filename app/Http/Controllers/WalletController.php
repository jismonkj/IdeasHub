<?php

namespace Ideashub\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Ideashub\Wallet;
use Ideashub\TempWallet;
use Ideashub\User;
use Ideashub\Idea;

class WalletController extends Controller
{
    public function walletBalance()
    {
         //total debit amount
         $debit = User::find(Auth::id())->wallet()->where('type', 'debit')->sum('amount');
         //total credit amount
         $credit = User::find(Auth::id())->wallet()->where('type', 'credit')->sum('amount');
         $credit += Wallet::where([['did', Auth::id()],['type', 'debit']])->sum('amount');
         //
         $balance = $credit - $debit;

         return $balance;
    }

    public function showWallet()
    {
        $balance = $this->walletBalance();
        $payments = User::find(Auth::id())->wallet()->where('type', 'debit')->get();
        $reciepts = Wallet::where([['did', Auth::id()],['type', 'debit']])->get();
        $reciepts_ = User::find(Auth::id())->wallet()->where('type', 'credit')->get();
        
        // $transactions = array_merge($transactions, $transactions_);

        $minBalance = true;
        $alertClass = 'alert-info';
        if($balance < 1200){
            $alertClass = 'alert-danger';
            $minBalance = false;
        }
        return view('wallet', ['balance'=>$balance
        , 'alertClass'=> $alertClass, 'minBalance'=>$minBalance, 'payments'=>$payments, 'reciepts'=>$reciepts, 'reciepts_'=>$reciepts_]);
    }

    public function walletPay(Request $request)
    {
        //
        return 'payment processing';
    }

    //transfer to temporary wallet
    public function walletTransfer(Request $request)
    {
        $data = $request->all();
        $data['uid'] = Auth::id();
        $pay = Wallet::create($data);
        $pay->save();

        $data['id'] = $pay->id;
        $tempPay = TempWallet::create($data);
        $tempPay->save();
        $this->changeIdeaStatus('paid', $request->refer_id);
        return $this->walletBalance();
    }

    //collect money
    public function walletCollect(Request $request)
    {
        // return $request->all();
        $data = $request->all();
        $data['uid'] = Auth::id();
        $data['refer_id'] = '0';
        $data['did'] = '0';
        $data['type'] = 'credit';
        $collect = Wallet::create($data);
        $collect->save();
        
        return view('info', ['info' => '<b>Your wallet is credited with <i class="fas fa-rupee-sign"></i>'.$request->amount .'</b>', 'htmlclass' => 'alert-success', 'title'=> 'Payment Complete', 'ret_url'=>'wallet/view']);
    }

    public function changeIdeaStatus($status, $iid)
    {
        $idea = Idea::find($iid);
        $idea->status = $status;
        $idea->save();
    }
}
