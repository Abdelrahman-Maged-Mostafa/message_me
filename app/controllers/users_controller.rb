class UsersController < ApplicationController
    def new
        @user = User.new
    end

 
 
    def create
        @user = User.new(user_params)

        if @user.save
        flash[:success] = "تم إنشاء الحساب بنجاح 🎉"
        session[:user_id] = @user.id
        redirect_to root_path
        else
        flash[:error] = @user.errors.full_messages.to_sentence
        render :new, status: :unprocessable_entity
        end
    end

    private

        def user_params
            params.require(:user).permit(:username, :email, :password, :password_confirmation)
        end

    
end
# redirect_to login_path