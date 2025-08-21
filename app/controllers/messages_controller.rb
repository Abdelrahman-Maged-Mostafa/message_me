class MessagesController < ApplicationController
    before_action :require_user,only: [:create]

    def create
        message = Message.new({body:params[:message][:message_body],user_id:cur_user.id})
        if message.save 
            flash[:success] = "Message sent"
            ActionCable.server.broadcast("chatroom_channel", { foo: {body: message.body, username: message.user.username} })
        else
            flash.now[:error] = "Have an error ,Message not send"
        end
    end

end
# redirect_to login_path