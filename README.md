# 🦚 PAVO

🦚 _Show your feathers with our collaborative whiteboard app_ 🦚

**Pavo** is our submission for [Lifehack 2021](https://lifehack-2021.devpost.com), a virtual hackathon for a post-covid world.

This hack was submitted for the **Education** category. Check out our [demo](pavopavopavo.herokuapp.com)!

## Motivation

In this post covid world, hybrid learning is the new normal. Students can be in a classroom and their education is augmented
with technology, or educators can teach remotely from the comfort of their homes. Pavo aims to make the transition to hybrid
learning easy.

Pavo is a virtual whiteboard that makes collaboration between teachers and students easy.

Pavo is the Latin word for _peacock_, and as we know, peacocks love to display their colourful feathers. Similarly, in classrooms,
we hope that students have the courage to show off their knowledge and answers. It is a common experience for students who are
more introverted to stay quiet in class due to the reluctance to raise their hands or walk to the whiteboard. 

With this application, shy students can choose to submit their answers to the teachers while the teachers look at their screens that consist of all students’ 
whiteboards in real time. Learning experience in a classroom setting is enhanced, as students are more willing to contribute
to class discussions, while teachers are enabled to better understand students’ struggles.

## Current Situation

Typically in schools, when students are called upon to the whiteboard to present their work, there are multiple approaches:

1. Teacher calls student to whiteboard to write out solution from their workbooks/notebooks/foolscap
2. Teacher asks student to present using the visualiser/projector
3. Teacher calls out for volunteers for students to the whiteboard to try a question from scratch

From all these situations, there are some inconveniences, namely:

1. Teacher will need to switch from projecting their laptop monitors to the whiteboard (perhaps retracting the screen)
2. Teacher will need to toggle between showing the laptop monitor and the visualiser
3. There will be a lot of movement in the class, e.g. students moving from their seats to the whiteboard
4. Performance anxiety: If students are randomly called upon to the front to try a question out, they may be anxious that they do something incorrect while everyone is watching them write on the whiteboard
5. Not everyone is trying the question: Only those that were called upon by the teacher try the question while the rest just watch

## Solution

To help tackle these inconveniences, our team has come up with Pavo, an interactive real-time whiteboard to aid in facilitating lessons.

### Physical setting
Pavo provides teachers with canvases that can be displayed across to all devices in the class. With tablets such as iPads being distributed to students, all the teacher has to do is create a room, and students join the room using the unique room ID.

Now all students will have a closer view of the whiteboard, and will not have a difficult time looking at the whiteboard at the front of the classroom.

Each student will also be provided with their own canvas, in which they can write down their own questions, or their working to the questions posed by the teacher. The teacher can look through all students canvases.

Teachers can also highlight certain student's whiteboards.

We believe that by removing this performance anxiety, students will be given a comfortable environment to show their full potential.

### Virtual setting
Pavo helps with remote learning where teachers and students can view each others' work in real time. This helps when a teacher is trying to step through a student's working, and understand their thought processes.

## Features

1. Ability to create rooms and join rooms with a provided username
2. Waiting room:
   - Can see list of users in room
   - Can see who is the host of the room
   - Host can start session
   - User must wait for host to start session
3. Rooms:
   - Real time collaborative whiteboard: Multi editing and viewing
   - Share whiteboard: Share with other users in the room
   - Host can view all users whiteboards to view progress
4. As well as an easter egg! 😉🦚🦚🦚🦚🦚 (hint: keep your speakers on!)

## Future Plans

We aim to fix these bugs in the future

1. Unable to create a new room upon quitting a room unless you refresh the page

## Running our app

1. `git clone` our repository
2. `npm install`, `npm start` (in root directory)
3. `cd client`, `npm install`, `npm start`

### Deploys

We deploy our app using Heroku. `npm run build` in the client directory before pushing.

## The Team
- Chan Yu Cheng
- Jefferson Lim
- Joenz Kim-Chan
- Yin Ruoyan
