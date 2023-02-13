import smtplib

server = smtplib.SMTP_SSL('smtp.yandex.com.tr', 465)
server.ehlo()
server.login('lma709@yandex.ru', '5ed903dFERBS!')
message = '''Привет, моя девочка Анечка

           Я не смогла сама приехать и открыть вместе с тобой альбом Мышки и Мишки
           Но зато тебе поможет нащ Медвежий ботик:

           С любовью, мышка'''.encode('utf-8')
server.sendmail('lma709@yandex.ru','lavrentev.dev@gmail.com',message)
server.quit()
print('E-mails successfully sent!')