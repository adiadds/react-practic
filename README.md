1. inline mn top/bottom margin nai chlta he. jab k right left margin chlta he. or inline element ki pedding dosry
   elements ko push nai krti hn balky overlap kr leti hn. jab k block elements mn sab margin or pedding chlti he. or
   pedding or margin dosry elements ko push krty hn. inline elements mn block elements work nai krty.

2. ager kis inline element ko block ki trha behave krwana ho to display: block; ya display: inline-block; use krty hn.

3. inline element mn pading add krny sy wo dosry elements ko overlape kr leti he. jab k block level elements dosry
   elements ko push krty hn. padding wessy bhi content and border k drmyan hoti he. (codeing in 100 day. lecture 16)

4. margin colapsing sirf block elements mn hoti he or vertically hoti he. yani k top bottom 2 adjesent block elements
   mn hoti he. yani ager 2 elements mn ager oper waly element ka bottom margin 20 he or nichy waly ka top margin bhi
   20 he to 2ono k drmayan total margin 20 hi ho ga na keh 40. or ager kisi ka 20 or dosry ka 25 he to total margin 25
   ho ga. yani kbary waly ka margin jeet jay ga.
   4.1 block element ki ager width set kr den or phir margin auto kren to 2ono trs braber space chor kr center mn element a
   jay ga. lekin ager width set nai ki hoi to block element pory block ki jga le ga jis sy margin work nai kry ga.
   4.2 inline element k sath width work nai krti. but ager ossy display block kr den to os mn width or margin auto set kiya ja skta he
   4.3 lekin ager 2,3 elements to 1 hi line mn rakhen or on ki width b set krna chahen to disply:inline-block; use krty hn

5. ager 1 block element k ander 1 or block element he to tab bhi marin colapsing ki wjha sy bigger margin win kr jay ga
   essi situation mn pedding use krna behtr he.

6 box-sizing:border-box; By default ager ap k h1 ya p ya div k content ko 10px pading ya margin lga howa ho to ap ager
width 100 set krty ho to total with 120 ho jay gi border ki wjha sy jo baad mn over flow ka sabab bnta he nav baar mn
ya kisi b div mn. to os ko avoid krny k liye box-sizing use krty hn

7. the css file imported first has less poeority then the file imported last. last file override all the previous files

8. Position Relitive: mn koi b object apni current position sy top, botum, left right k zeriye oper nichy hota he. or gap chorta he
   8.1 position Abslute: mn koi b object apny first parrent k rispective apni position change krta he. yani ager object ka parrent
   div he to os k respective or ager containter he to os k respective apni position change krta he or gap chorta he.
   8.2 Position fixed: position fixed reletive to the browser window. it fixed at specfic area. used top left bottom, right.
   8.3 position stickey: befaves like relitive untill it scroll down to a specfic area

9. kisi element ko float krny sy wo parent sy over flow ho jata he. jiss handdle krny k liye overflow: auto; use krty hn

10. box-sizing: border-box. It ensure that the width we provide is not changed including padding and margin.

cursor:pointer;, line-hight:0;, disply:none;(don't reserve space), visiility:hidien; (reserve space)
2rem (with respect to html) 2em (with respect parent) 100vh(100% view point hight) 100vw (100% view point width)
div > p (div k ander first child ) div + p (essa p jis ka subling div he)
input [type='text']{pedding:20px;}//jis input ki type text he

a[target]{ color:red;} // jis anchore ka target set he
a[target='_self']{ color:red;} //
li:nth-chlid(3){color blue;}// 3rd item of li will be blue
li:nth-chlid(2n+0){color blue;}// even item of li will be blue
li:nth-chlid(even)

---

git comands

pwd => full path-Name to current working directory
ls => list of directories / folders
dir => for directories
cd .. => change directory and move one step in folder
D: => for goto D drive
cd Users => for goto users folder
cd / => for root folder direct
cd C:\Users\Adil\Music => for directly go to music folder in c drive
cls => for clearing the cmd
mkdir folder-Name => for new folder creation
mkdir folder Name => it will creat 2 folders named folder and name
tab => for auto complition of the name of the folde you are typing
echo contet of file and things to show as content >
file-name.txt => for creating new file named file-name of type txt with content
type file-name => to see what is in side the file
del file-name => for deleting a file
rmdir folder-name => for deleting a folder
git config --global --edit => to check the current user and email. to exit that manu press :x
git config --global user.email "aadilasadhatti@gmail.com" => for adding email
git config --global user.name "Adil Asad" => for adding name to git
git --version => for check the version and to check if git is installed)
git init => for intialize the git reposetory //Start // first step
git status => to check weather any commit is made.
git log => to see all the commits on that branch. to quit log press (q)
git branch -m newName ( to change the branch name. by default its name is master
git add fileName.txt => for start trecking the changes in the file.
git add . => to add all newly created files at once
git commit -m "comments for future that what you have did in past"
git commit -am "commit message" => it adds an commit at once. but it only works if you did't created new fil
git branch => to check your current branch. and to watch how many branches
git checkout -b features => it will create a new copy of your current brench. in my case master branch. it will not effect mater
branch but will have the same commits as master
git checkout 87yy78g8g => watch commit number in git log and paste to go some other commit
git checkout master => to switch the branch
git merge features => it will merge features branch into your current branch. in this case current is master. we will
confirm this by looking in logs
if we update in 2 different branches and merge them it will rase conflicts. which will removed by accepting current or incoming updates
git rm fileName.txt => to delete a specfic file (cd deleting-data (first change the directory) after that add and commit to save changes
git reset --hard Head~1 => reverse/delete 1 last commit after ~ if write ~3 it will bring us back to 3 steps.
git branch -D features => it will delete features branch
git checkout -- . => it will remove all unstaged changes
git checkout -- fileName.txt => it will remove all unstaged changes in fileName.txt)
git reset file1.txt => it will turn file1.txt into unstaged file, and then above step)
git commit --amend -m "message" => change last commit message

Git Hub

git remote add origin https://github.com/adiadds/web-dev.git
git branch -M main ( to change the name of master branch to main)
git push origin main

to remove your Credetials
in start write > Credential Manager> windows Credential > Generic Credential > remove github

Clone
git clone https://github.com/adiadds/web-dev.git . (you must add full stop at the end) (git clone URL .)

private reposetrires could be seen in which you are a colaborator under setting>reposetries>
git pull -- to download updates made by others on git hub
to contribute fork>clone>push>pull request
fork -- You can fork a pulic project in which you are not a colaborator. then you download it by clone. then add features and
push it in your forked file. then request the owner of the file by pull request.

---

Notes
master -- root folder
branch -- a copy of till the current commits
unsplash.com :for random images with size you want

selector=property:value
p {color:red}
overflow: auto;

---

things to learn.

css:
how to center things.
how to show multi things in a line

---

lists

inline elements refrence
block elements refrence
html intities refrence
html sematic elements

---

java Script

`` ---- we can use back tick for multi line string.

array --- use to store similar data like hobi 1, hobi 2 , hobi 3 and so on. same data type
objact --- use to store reated data like jobTitle, name, address, salary. different data type. a variable in object is call property. and a function is call methon in a function
shedowing a variable --- means that a variable is made inside the function with the same name of a globle varbiable or out side of the function
pera meters= arguments--- are equal to the variables defined in side the function to assign values. and values a re assigned to them when we call them.
adil(32) we assign them value or the name of the another value like adil(age). age is defined at some other place
method--- A fnction in an object is call method. as it dont use function as prefix to define itself
defer--- useed in script tag to hold script untill the html execution
console.dir(document.body)--- to see the all properties of body.
firstChild, previousSiblings--- include text nodes
firstElementChild, previousElementSibling ---only html elements
children--- include multiple nodes

---

React JS

node -v => for node virsion
pwd => full path-Name to current working directory
ls => list of directories / folders
mkdir => create a new directory / folder
cd => change folder
cd .. => one level up
clear / cls => clear the console.
node -v => node version
npm init => for jeson file only
npm install => if we delete the node folder only then, to install all the dependencies
npm install bootstrap --save => for installing bootstrap
npm unistall -g => unistall older method
npx create-react-app folderName => boilerplate for react app
npm start => start react app
ctrl + ` => for terminal open and close
ctrl + c => trminate terminal
npm run build => for build the app
ctrl + B => open and close side-bar
rfc => for simple function and export
rafce => for errow function and export
clg => console log
cdi => for console dir
alt + z => for longer lines cut into more
alt + up/down errow keys => to bring a line up and down
! => for html boiler plate. (intinal html code)
ctrl + mouse wheel => to zoom the code
ctrl + d => copy line down
ctrl + / => for coments
lorem 40 => for 40 lorem ipsem words
p*4 => for 4 peragraph at once
h1*4 => same As above
ctrl + enter => to jump into new line
alt + click => to write on multiple lines
span.redBG => for span with class redBG
span#redBG => for span with id redBG
div.item#item-$\*4 => 6 divs with same class and 1 to 6 IDs
