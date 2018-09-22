<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfileUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profile_user', function (Blueprint $table) {
            $table->integer('uid')->unsigned()->primary();
            $table->string('fullname', 60);
            $table->date('dob');
            $table->string('city', 50);
            $table->string('state_id', 5);
            $table->string('pincode', 8);
            $table->string('contact', 12);
            $table->string('profession', 50);
            $table->string('gender', 10);
            $table->string('avatar', 180);
            $table->timestamps();

            $table->foreign('uid')
                ->references('id')->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profile_user');
    }
}
