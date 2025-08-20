class SessionsController < ApplicationController
    before_action :logged_in_redirect,except: [:destroy]

    def new
    end

    def create
        user = User.find_by(username:params[:session][:username])
        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id
            flash[:success] = "you have success logged in "
            redirect_to root_path
        else
            flash.now[:error] = "there was something wrong with your login information"
            render "new"
        end
    end

    def destroy
        session[:user_id] = nil
        flash[:success] = "you have success logged out "
    end



    private

    def logged_in_redirect
        if logged_in?
            flash[:error] = "You are already logged in"
            redirect_to root_path
        end
    end

end
# redirect_to login_path