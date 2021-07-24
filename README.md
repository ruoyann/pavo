# 🦚 PAVO

🦚 _Show your feathers with our collaborative whiteboard app_ 🦚

This hack was submitted for the **Education** category. Check out our [demo](https://pavopavopavo.herokuapp.com) and [video walkthrough](https://drive.google.com/file/d/18wHvIIbPguGHFeyEzU-_Cjt3xo7c7vcK/view?usp=sharing)!

## Inspiration
In this post-covid world, hybrid learning is the new normal. Students can be in a classroom and their education is augmented with technology, or educators can teach remotely from the comfort of their homes.

Pavo is a **virtual whiteboard** that aims to **make the transition to hybrid learning seamless.**

Pavo is the Latin word for _peacock_, and as we know, peacocks love to display their colourful feathers. Similarly, in classrooms, we hope that students have the courage to show off their knowledge. It is a common experience for students who are more introverted to stay quiet in class due to the reluctance to raise their hands or walk to the whiteboard. 

With Pavo, shy students can choose to submit their answers to the class while teachers monitor all students’ whiteboards in real time. Learning experience in a classroom setting is enhanced, as **students are more willing to contribute to class discussions**, while **teachers can better facilitate a more inclusive classroom**.

## Current Situation
Typically in schools, when students are called upon to the whiteboard to present their work, there are multiple approaches:

1. Teacher calls student to whiteboard to write out solution from their workbooks/notebooks/foolscap
2. Teacher asks student to present using the projector
3. Teacher calls out for volunteers for students to the whiteboard to try a question from scratch

From all these situations, there are some inconveniences, namely:

1. Teacher will need to switch from projecting their laptop monitors to the whiteboard (perhaps retracting the screen)
2. Teacher will need to toggle between showing the laptop monitor and the projector
3. There will be a lot of movement in the class, e.g. students moving from their seats to the whiteboard
4. Performance anxiety: If students are randomly called upon to the front to try a question out, they may be anxious that they do something incorrect while everyone is watching them write on the whiteboard
5. Not everyone is trying the question: Only those that were called upon by the teacher try the question while the rest just watch

## Our Solution
To help tackle these inconveniences, we built Pavo, an interactive real-time whiteboard to aid in facilitating lessons.

### Physical setting
Pavo provides teachers with virtual whiteboards that are **shared and synced with all devices in the class.** 

Now all students will have a closer view of the teacher's whiteboard, and can make changes in real time with their own personal whiteboard. Students can write down their own questions, or their working to the questions posed by the teacher, and the teacher can look through all students canvases.

Teachers can host quizzes where they can check student's working in real time, students can collaborate on a shared whiteboard from the comfort of their own desks... the possibilities are endless!

### Virtual setting
Pavo helps with remote learning where **teachers and students can view each others' work in real time.**

This helps when a teacher is trying to step through a student's working, and understand their thought processes.

## Features
1. Create and join private rooms with usernames
2. Waiting room:
   - Can see list of users in room
   - Can see who is the host of the room
   - Host can start session
   - User must wait for host to start session
3. Rooms:
   - Real time collaborative whiteboard: Multi editing and viewing
   - Share whiteboard: Share with other users in the room
   - Host can view all users whiteboards to view progress
4. As well as an easter egg on the homepage! 😉🦚🦚🦚🦚🦚 (hint: keep your speakers on!)

## How we built it
**Frontend:** React.js, Material UI

**Backend:** Express, Node.js, Socket.io

## Future Plans
1. Bring it out of prototype status 😊 Right now it only works as a demo application, so some features are still buggy.
2. More features to whiteboard: e.g. shapes, undo/redo, touch support
3. Allow students to collaborate in more ways (e.g. chat, groups, profile pictures etc.)

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
