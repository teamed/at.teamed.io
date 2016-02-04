---
layout: default
title: "Hire Us"
permalink: /hire.html
description:
  Hire a remotely managed team of software developers,
  orchest. Tap into a distributed global network of the
  highest-caliber programmers, working under our control.
keywords:
  - hire software developer
  - remote programmer hire
  - hire programmer
  - hire developers
  - hire a programmer
---

Please fill out this form. We will analyze your information
and provide an estimate within 24 hours.

<form name="form" id="form" data-ng-submit="submit('#form');">
  <p>
    <label>What your project is about?</label>
    <br/>
    <textarea name="info" style="width:100%;height:9em" tabindex="12"
      data-ng-model="info" required></textarea><br/>
    <span class="help">Please, tell us briefly about your business case,
      expected stack of technologies, current situation with
      the source code (if it exists), and your quality and time expectations.</span>
  </p>
  <p>
    <label>How should we contact you?</label>
    <br/>
    <input name="contact" type="text" tabindex="2"
      style="width:25em" data-ng-model="contact" required/><br/>
    <span class="help">Give us either a phone number or an email.</span>
  </p>
  <p>
    <button id='submit' tabindex="14">Submit</button>
    via
    <img src="/images/netbout-logo.jpg" alt="netbout"
      style="vertical-align:middle;width:100px;height:22px;"/>
    <br/>
    <span class="help">Right after you click this button, we'll create a new
    conversation in Netbout. One of us will reply to you
    within 24 hours.</span>
  </p>
</form>

<script src="/js/hire.js"></script>
