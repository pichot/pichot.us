---
layout: post
title: Becoming a Rubyist
canonical_url: https://collectiveidea.com/blog/archives/2013/02/25/becoming-a-rubyist
canonical_source: the Collective Idea blog
---

I joined Collective Idea six months ago. In that time, I've had the chance to throw myself into a new language. Just like learning a new spoken language, learning a new programming language means learning a new way of thinking. Here are some of my reflections on becoming a Rubyist.

### Coding is Human

My initial attraction to Ruby was the community's emphasis on clear, human-readable code. You can only write so many nested foreach loops in PHP before you begin to look for a more succinct and rational language. When I began exploring Ruby, I was struck by Matz's [human-centered philsophy](http://www.artima.com/intv/rubyP.html) of increasing progammer happiness, and of the [principle of least surprise](http://en.wikipedia.org/wiki/Principle_of_least_astonishment). I was also itching to program in an Object-Oriented language. (Though PHP does have objects, the [framework I worked in previously](http://drupal.org) is almost exclusively procedural.) Even now, when I write an each loop in Ruby, I can't help enjoying how nice it looks.

Reading Russ Olsen's excellect [Eloquent Ruby](http://www.amazon.com/Eloquent-Ruby-Addison-Wesley-Professional/dp/0321584104), I realized that programming could be an aesthetic exprience as well as a logical one. Steve Klabnik has spoken on these themes, putting programming in relation to [literature](http://vimeo.com/31204088) and [philsophy](http://vimeo.com/50733183). It's very typical when talking to other Rubyists to hear code described as 'beautiful' or 'clever'. For me, coming to understand programming in these terms connects it with other human pursuits. After all, a community that produced [_why](http://en.wikipedia.org/wiki/Why_the_lucky_stiff) must understand art as well as engineering.

### Patterns are (educated) Opinions

I learned quickly after joining Collective Idea that there is rarely one right answer to a programming problem. It's been revealing to hear the differing opinions in the office over everything from Ruby conventions to Rails patterns. Simply listening to these conversations has made me a better programmer. It's also made me want to take the time to develop my own well-supported opinions.

The freedom that comes from not having one answer (and a language that lets you open any class!) is incredibly empowering, but it can also be paralyzing. When I encounter decisions that have architectural implications, I'm still uncertain on how best to move forward. I'm afraid of making a decision that I regret later. I don't yet have the benefit of experience to help me weigh the pros and cons of any one approach. 

I encountered my first significant technical debt a few months after starting. I was working on an app that  functions primarily as a glue between several different services. On certain actions, it makes calls to at least 3 separate services, having to coordinate and process the responses from each. My controller had gotten out of hand, and I had mixed up some business logic in with my models. My tests were straining, edge cases were breaking the app, and I knew I was Doing It Wrong™.

Discussing with colleagues how best to move forward, it was suggested I try a pattern one of them had [had recently written about](http://collectiveidea.com/blog/archives/2012/06/28/wheres-your-business-logic/). Called the Interactor pattern, it seperated all my interactions with outside services into a seperate class. It was beautiful, it just *felt* better, and my tests agreed.

### Testing is Craft

You can't spend much time working in Ruby without hearing about the importance of testing. At first, I had a typical reaction, wondering how writing more code would make me more productive. The more I did, though, the more I realized how good tests lead you to write better code. My first tests, of course, weren't very good. But they got better. And after watching Geoffrey Grosenbach [excellent series on RSpec](https://peepcode.com/products/rspec-i) (he's recently updated it for RSpec 2), I began to fully grasp isolation and why small methods are awesome.

I also began to understand what the industry buzzword around 'craftsmanship' really means. I've worked in software long enough to know firsthand how easy it is for projects to underperform and go over budget. Building software is unlike building almost anything else. It's essentially collaborative logic-making. Because its product is incredibly malliable, it needs clear and specific guidelines. Becoming a 'software craftsperson' is having the humility to realize that one person cannot fully conceptualize the complexity of the entire software stack. We write tests because we know we'll make mistakes, because we'll have to maintain what we've built, and because we don't know who might have to work with our code in the future. This may be old news to [TDD](http://en.wikipedia.org/wiki/Test-driven_development) diehards, but that doesn't make the idea any less powerful.

In short, becoming a Rubyist has been one of the most rewarding processes in my career. It's made me appreciate what I do on an aesthetic level, it's brought me a creative freedom I didn't expect from programming, and it's given me the tools to be proud of what I build. 
