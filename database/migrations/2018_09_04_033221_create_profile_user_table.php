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
            $table->increments('uid')->unique()->unsigned();;
            $table->string('fullname', 60);
            $table->date('dob');
            $table->string('city', 50);
            $table->integer('state_id', 5);
            $table->string('pincode', 8);
            $table->string('contact', 12);
            $table->string('profession', 50);
            $table->string('avatar', 50);
            $table->timestamps();

            $table->foreign('c_id')
                ->references('id')->on('users')
                ->onDelete('cascade');

            $table->foreign('state_id')
                ->references('id')->on('states');
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
