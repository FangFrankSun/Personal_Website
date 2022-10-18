---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

Hi I am **{{ site.author.name }}** :wave:,<br>
a senior student double majoring in [Architecture](https://www.arch.virginia.edu) and [Computer Science](https://engineering.virginia.edu/departments/computer-science/about-computer-science/about-us) at the [University of Virginia](https://www.virginia.edu) (joined August 2019). I love both tracks and hope to design smart architecture in the near future as my major career goal. 
  
I am also a chess national master with uscf rating 2359, and I have my own firm called [Hummer Education](https://www.littlehummerchess.club), dedicated to help more people learn better chess skills. And now we started to do software development courses as well, with online tutorials in Chinese for most of them.

<!-- <div id="container">
  <p class="text-center">
    <h1><strong>About Me</strong></h1>
  </p>
  <p class="text-center">
    Hi! I'm Hugo Le Moine :wave:<br>
    I'm a Data Scientist at Pierre Fabre Group.
  </p>

  <div class="row d-flex justify-content-center mb-3">

    {%- assign unfocused_color = "6c757d" -%}
    
    {% for account in site.author %}
    
      {%- assign service_name = account[0] -%}
      {%- assign service_data = site.data.social-media[service_name] -%}
      {%- if service_data -%}
        <a class="social d-flex justify-content-center"  href="{{ service_data.url }}{{ account[1] }}"
           style="color: #{{ unfocused_color }}"
           aria-label="{{ service_name }}"
           onMouseOver="this.style.color='#{{ service_data.color }}'"
           onMouseOut="this.style.color='#{{ unfocused_color }}'">
          <i class="{{ service_data.icon }} fa-2x align-self-center"></i>
        </a>
      {%- endif -%}
    
    {% endfor %}
 -->

  
  <p class="text-center">
   {% include elements/button.html link="/assets/resume/CV_EN_Hugo_Le_Moine_EEO.pdf" text='<i class="far fa-file-pdf  fa-1x align-self-center"></i> Resume' %}
   {% include elements/button.html link="#my-tech-stack" text='My Tech Stack' %}
   {% include elements/button.html link="#languages-i-speak" text='Languages I speak' %}
   {% include elements/button.html link="#work-experience" text='Work Experience' %}
   {% include elements/button.html link="#education" text='Education' %}
  </p>

## My Tech Stack
##### Programming languages
---
{% include about/skills.html source=site.data.programming-skills %}
<!-- <a href="https://www.python.org/">Python</a>&nbsp;
<a href="https://www.r-project.org/">R</a>&nbsp;
<a href="https://en.wikipedia.org/wiki/C_(programming_language)">C</a>&nbsp;
<a href="https://en.wikipedia.org/wiki/C%2B%2B">C++</a> -->


## Education
<div class="row">
  {% include about/timeline.html source=site.data.education-timeline %}
</div>


## Work Experience
<div class="row">
  {% include about/timeline.html source=site.data.experiences-timeline %}
</div>













<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>

