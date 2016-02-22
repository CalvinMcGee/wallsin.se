---
title: Kontakt
form:
  legend: Formulär
  fields:
    - name: subject
      row: 1
      label: Ämne
      placeholder: Ange ämne
      type: text
      outerclasses: 'column xsmall-12 small-6'
      validate:
        required: true

    - name: email
      row: 1
      label: E-postadress
      placeholder: Ange din e-postadress
      type: email
      outerclasses: 'column xsmall-12 small-6'
      validate:
        required: true

    - name: firstname
      row: 2
      label: Förnamn
      placeholder: Ange förnamn
      type: text
      outerclasses: 'column xsmall-12 small-6'
      validate:
        required: true

    - name: lastname
      row: 2
      label: Efternamn
      placeholder: Ange efternamn
      type: text
      outerclasses: 'column xsmall-12 small-6'
      validate:
        required: true

    - name: message
      rows: 5
      row: 3
      label: Ditt meddelande
      placeholder: Ange ditt meddelande
      type: textarea
      outerclasses: 'column xsmall-12'
      validate:
        required: true

#    - name: g-recaptcha-response
#      row: 4
#      label: Captcha
#      type: captcha
#      outerclasses: 'column xsmall-12'
#      recatpcha_site_key: '6Lfo2RgTAAAAACkXc41aJ3iE5s6f1iaUMnFL7GTe'
#      recaptcha_not_validated: 'Captcha inte giltig'
#      validate:
#        required: true
  buttons:
    - type: submit
      value: Skicka

  process:
#    - captcha:
#      recatpcha_secret: '6Lfo2RgTAAAAAKBZml7nM2ZFSeOO8i_cgsvdZ-rG'
    - display: thankyou
---
