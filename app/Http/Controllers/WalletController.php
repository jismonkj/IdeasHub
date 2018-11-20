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
 
         //
         $balance = $credit - $debit;

         return $balance;
    }

    public function showWallet()
    {
        $balance = $this->walletBalance();
        $transactions = User::find(Auth::id())->wallet()->get();

        $minBalance = true;
        $alertClass = 'alert-info';
        if($balance < 1200){
            $alertClass = 'alert-danger';
            $minBalance = false;
        }
        return view('wallet', ['balance'=>$balance
        , 'alertClass'=> $alertClass, 'minBalance'=>$minBalance, 'transactions'=>$transactions]);
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

    public function changeIdeaStatus($status, $iid)
    {
        $idea = Idea::find($iid);
        $idea->status = $status;
        $idea->save();
    }
}
