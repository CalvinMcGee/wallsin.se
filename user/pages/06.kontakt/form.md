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

    - name: phone
      row: 3
      label: Telefonnummer
      placeholder: Ange telefonnummer
      type: text
      outerclasses: 'column xsmall-12 small-6'

    - name: address
      row: 3
      label: Adress
      placeholder: Ange adress
      type: text
      outerclasses: 'column xsmall-12 small-6'

    - name: message
      rows: 5
      row: 4
      label: Ditt meddelande
      placeholder: Ange ditt meddelande
      type: textarea
      outerclasses: 'column xsmall-12'
      validate:
        required: true

    - name: captcha
      row: 5
      label: Captcha
      type: turnstile
      theme: light
      outerclasses: 'column xsmall-12'
  buttons:
    - type: submit
      value: Skicka

  process:
    turnstile: true
    email:
        from: "{{ config.plugins.email.from }}"
        from_name: "{{ form.value.firstname|e }} {{ form.value.lastname|e }}"
        to: "{{ config.plugins.email.to }}"
        to_name: "{{ config.plugins.email.to_name }}"
        reply_to:
            - "{{ form.value.email|e }}"
        subject: "[Feedback] {{ form.value.subject|e }}"
        body: "{% include 'forms/contact.html.twig' %}"
    save:
        fileprefix: kontakt-
        dateformat: Ymd-His-u
        extension: txt
        body: "{% include 'forms/data.txt.twig' %}"
    display: thankyou
---
