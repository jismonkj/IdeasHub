<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfileCompanyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profile_company', function (Blueprint $table) {
            $table->integer('c_id', 10)->unique()->unsigned();
            $table->string('uni_name', 100);
            $table->string('comp_type', 60);
            $table->string('website', 50);
            $table->string('industries');
            $table->string('twitter', 30);
            $table->string('location', 60);
            $table->string('state_id', 5);
            $table->string('contact', 16);
            $table->string('founded', 5);
            $table->string('avatar', 180);
            $table->string('bio');
            $table->timestamps();

            $table->foreign('c_id')
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
        Schema::dropIfExists('profile_company');
    }
}
