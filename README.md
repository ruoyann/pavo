# PAVO

Pavo - The latin translation of peacock

We are Yu Cheng, Jeff, Joenz and Ruoyan, and this web app serves to answer the Second Problem Statement about Education:
As technology rapidly infiltrates the education sector and changes not just the way people learn, but also how people teach,
what refreshing ideas do you have to make learning and / or teaching more safe, exciting and effective?

## Our motivation

In this post covid world, hybrid learning is the new normal. Students can be in a classroom and their education is augmented
with technology, or educators can teach remotely from the comfort of their homes. Pavo aims to make the transition to hybrid
learning easy.

Pavo is a virtual whiteboard that allows for collaboration between teachers and students.

Peacocks love to display their colourful feathers. Similarly, in classrooms, we hope that students have the courage to show
off their knowledge and answers. It is a common experience for students who are more introverted to stay quiet in class due
to the reluctance to raise their hands or walk to the whiteboard. With this application, shy students can choose to submit
answers anonymously to the teachers while the teachers look at their screens that consist of all students’ whiteboards in
real time. Eventually, learning experience in a classroom setting is enhanced, as students are more willing to contribute to
class discussions, while teachers are enabled to better understand students’ struggles.

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

## Our solution

To help tackle these inconveniences, our team has come up with Pavo, an interactive real-time whiteboard to aid in facilitating lessons.

Pavo aims to provide teachers with canvases that can be displayed across to all devices in the class. With tablets such as iPads being distributed to students, all the teacher has to do is create a room, and students join the room using the unique room ID.

Now all students will have a closer view of the whiteboard, and will not have a difficult time looking at the whiteboard at the front of the classroom.

Each student will also be provided with their own canvas, in which they can write down their own questions, or their working to the questions posed by the teacher. The teacher can look through all students canvases to view any questions or view their students working from their side.

If the teacher wishes for a student to share their whiteboard to the class, the student can press share whiteboard and their whiteboard will be shown to everyone in the room. Otherwise, student whiteboards will be hidden from the other students.

We believe that by removing this performance anxiety, students will be given a comfortable environment to show their full potential

## Current features

1. Ability to create rooms and join rooms with a provided username
2. Waiting room:
   - Can see list of users in room
   - Can see who is the host of the room
   - Host can start session
   - User must wait for host to start session
3. Rooms:
   - Real time collaborative whiteboard: Multi editting and viewing
   - Share whiteboard: Share with other users in the room
   - Eraser: Erase what you drew incorrectly
   - Clear whiteboard: Clear the canvas
   - Draw on other peoples whiteboard: Ability to draw on others whiteboards if being shared
   - For host, can view all users whiteboards to view progress
   - Can click logo at the top to go back to home page

## Down the road

We aim to fix these bugs in the future

1. Unable to create a new room upon quitting a room unless you refresh the page

## Running our app

1. git clone our repository
2. npm install, npm start
3. cd client, npm install, npm start
