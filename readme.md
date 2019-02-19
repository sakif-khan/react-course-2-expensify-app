MarkDown File

#Git commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits


#Secure SHell(SSH key)

(on git bash inside the project directory - to check if we have existing ssh keys)
* la -a ~/.ssh

(to generate new set of ssh keys)
* ssh-keygen -t rsa -b 4096 -C "sakifkhan@iut-dhaka.edu"

(tool - check if "SSH agent" is running)
* eval "$(ssh-agent -s)"

(add the new key - provide the path to the private key file)
* ssh-add ~/.ssh/id_rsa

(we are now ready to take the public key file and give that to github)

* clip < ~/.ssh/id_rsa.pub
(Copies the contents of the id_rsa.pub file to your clipboard)

(try to make ssh connection to github server)
* ssh -T git@github.com

(to let git know this is where out remote code should live)
(provide a remote name and a remote url)
(default name origin - from main repo)
(value - ssh url)
* git remote add origin git@github.com:sakif-khan/react-course-2-expensify-app.git


(-u - creates association between local code and the upstream github repo)
(origin - remote)
(master - branch)
git push -u origin master