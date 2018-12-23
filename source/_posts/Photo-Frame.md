---
title: Mother's Day Photo Frame
date: 2017-5-14 13:00:00
tags:
- Raspberry Pi
- Python
keywords: 
- Raspberry Pi
- Python
- Frame
- Photo
comments: false
coverImage: https://res.cloudinary.com/dheqbiqti/image/upload/v1544512051/Projects/PhotoFrame/IMG_0405.jpg
coverMeta: out
thumbnailImage: none
thumbnailImagePosition: none
coverSize: partial
gallery:
 - https://res.cloudinary.com/dheqbiqti/image/upload/v1544545531/Projects/PhotoFrame/IMG_0229.jpg "Original electronics ready to be removed, and replaced with an HD screen"
 - https://res.cloudinary.com/dheqbiqti/image/upload/v1544545531/Projects/PhotoFrame/IMG_0234.jpg "Guts removed"
 - https://res.cloudinary.com/dheqbiqti/image/upload/v1544545531/Projects/PhotoFrame/IMG_0237.jpg "New screen in"
 - https://res.cloudinary.com/dheqbiqti/image/upload/v1544545532/Projects/PhotoFrame/IMG_0250.jpg "Working screen"
 - https://res.cloudinary.com/dheqbiqti/image/upload/v1544545531/Projects/PhotoFrame/IMG_0238.jpg "Attaching buttons"
 - https://res.cloudinary.com/dheqbiqti/image/upload/v1544545533/Projects/PhotoFrame/IMG_0279.jpg "Configuring OSMC on the Pi"
 - https://res.cloudinary.com/dheqbiqti/image/upload/v1544545532/Projects/PhotoFrame/IMG_0275.jpg "Writing the script"
 - https://res.cloudinary.com/dheqbiqti/image/upload/v1544545533/Projects/PhotoFrame/IMG_0281.jpg "Some final testing"
 - https://res.cloudinary.com/dheqbiqti/image/upload/v1544545533/Projects/PhotoFrame/IMG_0290.jpg "Less than ideal skotch tape reassembly"
 - https://res.cloudinary.com/dheqbiqti/image/upload/v1544545534/Projects/PhotoFrame/IMG_0405.jpg "Final placement! Mom loved it"
---
<p> This year for Mother's Day, I decided to take an old digital photo frame we had lying around the house, and throw in some improvements. Originally, the frame had a small amount of internal memory, and could store low resolution images loaded in from a flash drive. The process of moving files over was tedious, and I wanted anyone in my family to be able to easily contribute to the rotation of photos. Going away from school, I thought it would be neat to be able to easily update the frame with new photos, no matter where my siblings were in the world.
</p>

<!-- More -->

# Solution ● [Github](github.com/bmitchinson/raspberry-pi-photo-frame)
<p>Inside now is a Raspberry Pi running OSMC on a HD display, with a python script running in the background to download new photos from a dedicated Gmail account. From there, OSMC transitions through them all to display. The frame is also enabled with SSH at home, so while I'm at school, I can perform remote updates and mass file transfers to update large amounts of photos manually.
</p>

# What I learned + potential improvements
<p> This being one of my first personal side projects, interacting with the Gmail API for the first time resulted in a really satisfying final result. The ability of anyone to be able to either email the address, or even send a photo through SMS to it, and know that it would be displayed within the next 15 minutes, felt very impressive for the little python work required.

Ideally, I would have preferred to run a more appropriate OS, and just manually create a GUI solution to iterating through the photos, as opposed to having to use everything that comes with OSMC, just to use its wallpaper feature. That being said, it's funny to send YouTube videos to it, including active streams of live events.

There's also more ideas for improvements of the script located in [the issues on my GitHub repo](https://github.com/bmitchinson/Raspberry-Pi-Photo-Frame/issues), and I'm always happy to view updates and requests. 
</p>

# Script
<div style="height:600px;overflow-y:scroll">
  {% tabbed_codeblock dlAttachments.py https://github.com/bmitchinson/Raspberry-Pi-Photo-Frame/blob/master/dlAttachments.py %}
      <!-- tab python -->
          # Referenced http://stackoverflow.com/questions/348630/how-can-i-download-all-emails-with-attachments-from-gmail
# Make sure you have IMAP enabled in your gmail settings.
# See / create issues on github.com/bmitchinson/raspberry-pi-photo-frame

import sys
import imaplib
import email
import email.header
import datetime
import os

# All pictures downloaded to "/Attachments" by default
detach_dir = '.'
if 'Attachments' not in os.listdir(detach_dir):
    os.mkdir('Attachments')

# Replace *username* and *password*
EMAIL_ACCOUNT = "*USERNAME*@gmail.com"
EMAIL_PASSWORD = "*PASSWORD*"
# Use a dedicated folder if desired, otherwise leave as "INBOX" to search inbox
EMAIL_FOLDER = "INBOX"

try:
    imapSession = imaplib.IMAP4_SSL('imap.gmail.com')
    typ, accountDetails = imapSession.login(EMAIL_ACCOUNT, EMAIL_PASSWORD)
    if typ != 'OK':
        print('Not able to sign in!')
        raise
    imapSession.select('INBOX')
    typ, data = imapSession.search(None, 'ALL')
    if typ != 'OK':
        print('Error searching Inbox.')
        raise
    # Iterating over all emails
    for msgId in data[0].split():
        typ, messageParts = imapSession.fetch(msgId, '(RFC822)')
        if typ != 'OK':
            print('Error fetching mail.')
            raise

        emailBody = messageParts[0][1]
        mail = email.message_from_bytes(emailBody)
        for part in mail.walk():
            if part.get_content_maintype() == 'multipart':
                continue
            if part.get('Content-Disposition') is None:
                continue
            fileName = part.get_filename()

            if bool(fileName):
                filePath = os.path.join(detach_dir, 'Attachments', fileName)
                if not os.path.isfile(filePath) :
                    print(fileName)
                    fp = open(filePath, 'wb')
                    fp.write(part.get_payload(decode=True))
                    fp.close()
    imapSession.close()
    imapSession.logout()
    
except:
    print('Not able to download all attachments.')

      <!-- endtab -->
  {% endtabbed_codeblock %}
</div>

# Gallery

<!-- Gallery -->