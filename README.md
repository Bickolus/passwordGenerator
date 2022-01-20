# Week 3: Create a Password Generator

## My Task 
For this week, the task was simple: given a website with HTML and its styling already present, code a password generator 
and insert it into the website seamlessly without errors. The password generator must:

1. Have window prompts 
2. Have the prompts allow you to customize whether the password includes capitals, lowercase, numbers, or special characters.
3. Have a prompt for how long your password should be.
4. Terminate the generation process if the password is either too short (8 characters) or too long (128 characters). 
5. Terminate the generation is nothing is selected (no uppercase, no lowercase, no numbers, no special characters).
6. When all prompts are finished, the password is shown in a window or in the page clearly. 

This challenge was a lot of fun and I could have done it in different ways. I decided to go with having a alphanumeric list that starts empty
and grows based on whether the user wants a set of characters (uppercases, lowercases, numbers, special characters) or not. After the prompts, 
a string with random characters picked from the list is generated using a for loop function. When I was researching on the internet, I found out that
you actually would not use Math.random() to generate a password because it's apparently not a secure method. However, for the sake of simplicity I
decided to stay with it.

> Repository Link: https://github.com/Bickolus/passwordGenerator/
> 
> Deployed Site Link: https://bickolus.github.io/passwordGenerator/

## Main Page
![Password generator main page](https://github.com/Bickolus/passwordGenerator/blob/main/images/generator1.png?raw=true)

## First Prompt (typed 16)
![Password generator when clicked on generate](https://github.com/Bickolus/passwordGenerator/blob/main/images/generator2.png?raw=true)

## Second Prompt (clicked OK)
![Second prompt](https://github.com/Bickolus/passwordGenerator/blob/main/images/generator3.png?raw=true)

## Third Prompt (clicked OK)
![Third prompt](https://github.com/Bickolus/passwordGenerator/blob/main/images/generator4.png?raw=true)

## Fourth Prompt (clicked Cancel)
![Fourth prompt](https://github.com/Bickolus/passwordGenerator/blob/main/images/generator5.png?raw=true)

## Fifth Prompt (clicked Cancel)
![Fifth prompt](https://github.com/Bickolus/passwordGenerator/blob/main/images/generator6.png?raw=true)

## Generated Password
![Generated Password](https://github.com/Bickolus/passwordGenerator/blob/main/images/generator7.png?raw=true)

## Alert window if character not within range
![Alert window](https://github.com/Bickolus/passwordGenerator/blob/main/images/generator8.png?raw=true)

## Another alert window if you click cancel on all criteria
![Another alert window](https://github.com/Bickolus/passwordGenerator/blob/main/images/generator9.png?raw=true)