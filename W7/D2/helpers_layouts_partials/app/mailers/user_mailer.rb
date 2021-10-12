class UserMailer < ApplicationMailer
    default from: 'everybody@appacdemy.io'

    def welcome_email(user)
        @user = user
        @url = users_url(user)
        mail(to: user.email.subject: 'Welcome to Facebook')
    end
end
