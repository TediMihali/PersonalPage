from django.shortcuts import render
import main.models as models
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.
def main(request):
    
    context = {}

    if request.method == "POST":
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        subject = request.POST.get("subject", '')
        message = request.POST.get('message', '')
        
        msg = models.Message(name=name, email=email,subject=subject, message=message)
        msg.save()
        send_email_message(msg)

    return render(request, 'main.html', context = context)

def send_email_message(msg: models.Message) -> bool:
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [settings.EMAIL_HOST_USER]
    send_mail(
        f"{msg.subject} - {msg.email} - {msg.name}",
        msg.message,
        email_from,
        recipient_list
    )