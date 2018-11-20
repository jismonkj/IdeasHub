<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTempWalletTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temp_wallet', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->integer('uid');
            $table->integer('did');
            $table->string('refer_id', 16);
            $table->string('amount', 30);
            $table->enum('type', ['debit', 'credit']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('temp_wallet');
    }
}
