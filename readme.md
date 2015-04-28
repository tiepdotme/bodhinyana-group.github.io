#Bodhinyana Group#

This is the back-end of the Bodhinyana Group website - a website built with Jekyll and hosted on GitHub Pages.

We are a meditation group that meets at Amaravati Buddhist Monastery in Hemel Hempstead, UK.

#Instructions for adding a post#

##TLDR;##

Open Word. Pop these lines at the top of the document.

---
layout: post
title:  
date:   2015-mm-dd 19:30:00
leader: Name
---

Customise the post headers referring to Appendix 1 for guidance.

If you have a reading pop it below the header content (the dashes), and format. See Helen’s kramdown cheatsheet below for help or use html. Check the _posts folder for past examples.

####References you can print out ####

[Complete instructions &ndash; including this page](/instructions.pdf)
["Appendix 1" &ndash; a guide to formatting the header](/appendix_one.pdf)
[Sample posts](/samples.pdf)



##Adding a post##

The post is made up of two parts. The header, between the three dashes, and then the reading.

###The header — post fields###

The header is everything between the three dashes at the top of your post. This must sit at the very beginning of the page. This includes the fields used to format the post and some of the information is recycled on other pages. Warning! The three dashes at the beginning and end are needed to make the posts work. Make sure they are included and make sure they didn’t turn into en dashes in Word!

All post fields — the value to the left of the colon — are in lowercase. Warning! If the text on the left of the colon is misspelled, even with an uppercase letter, the website won’t use the information you provide on the right. Because of this, please double or triple check your post.

####Basic fields####

These are the basic fields you need for your post. You could copy these out as a starting point.

---
layout: post
title:  
date:   2015-mm-dd 19:30:00
leader: Name
---

There is a table in Appendix 1 with more fields you can add to customise your meeting and reading.
 

###A word about readings — attribution###

You do not need to add a reading but if you’d like to add a short reading of a few pages, this would make a nice resource on the website. Copy the reading text into the area below the three dashes. 

Please check that we can include the reading online. Most Dhamma readings are free to distribute, but if in doubt please gain permission from the author before posting on our website. 

Note the author and the website link where you found the reading. 


###Formatting the reading###

The reading title is captured in the post header and so if you include it at the top of the reading as well, it will appear twice online.  

Most of the formatting for the website is done behind the scenes. This helps to keep the formatting consistent across the website and prevent the site from looking like a dog’s dinner.

If you reach for the bold button in Word — beware! Any formatting you add via Word will be stripped out.

You can dump your text into an online editor and format as if it were Word.

Otherwise we need to use kramdown to format the reading for the website. It’s not difficult and if you know HTML you can use that instead or as well. I’ve added a cheatsheet below and if you want to know kramdown inside and out, there is a not-so-quick “quick reference” here.


####A word about style:####

*Put Pali words in italics.

*Try and incorporate links into text, rather than putting the website link into the text. In the Kalama Sutta the Buddha gives some wonderful… 

*Include headers and images to break up the text a bit.

*One space at the end of each sentence.

*Spell out numbers under ten.


###Saving your post###

Save your post as 2015-mm-dd-title-of-your-meeting.markdown.

All lowercase. Dashes instead of spaces. File type: markdown.

If you can’t do this in Word, try copying your contents to NotePad or TextEdit and saving from there.


####Helen’s kramdown cheatsheet####

Italics
Bookend the text with asterisks
*Text in italics*


Bold
Bookend the bold text with a pair of asterisks.
**Some text I want to appear in bold**


Bullets
Use an asterisk
* My bulleted item

Second level headers 
Bookend your header with ##
##Second-level header## 


Third level headers
Bookend your header with ###
###Third-level header###


Links
Put square brackets around the text you want to link and put the link after it in parenthesis. 
[Amaravati Buddhinst Monastery](http://www.amaravati.org/)


Images
A bit like a link but it starts with an exclamation mark.
![A description of the image](file name)
![Ajahn Sumedho and Ajahn Chah](/assets/sumedho.jpg)


Footnotes
Put the number or letter in square brackets and a caret before the number.
Add the footnote at the bottom and put the square brackets caret number combination with a colon immediately after.
Anapanasati[^1] 
[^1]:Anapanasati: literally, 'mindfulness' (sati) of the in and out breath.

Quotes
Put a right angle bracket before the quote. 
>"Kalamas, 'Don't go by reports, by legends, by traditions, by scripture, by logical conjecture, by inference, by analogies, by agreement through pondering views, by probability, or by the thought, 'This contemplative is our teacher.' 























