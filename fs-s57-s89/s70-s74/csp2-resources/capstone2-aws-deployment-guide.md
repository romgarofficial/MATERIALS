# CAPSTONE 2 - AWS DEPLOYMENT (STUDENT GUIDE)

-----------------------------------------------------------------------------
## PART 1 - CONNECTING TO REMOTE AWS SERVER INSTANCE
-----------------------------------------------------------------------------
1. Fill out the form to send your ssh key to your instructor. Inform your instructor once done to set your cloud server.


2. Go to this link *{AppScript Web App}* and search for your instance information by using your registered email. Then copy the command for connecting to the instance.

![Untitled](images/1-2.png)

3. Open a terminal/git bash and paste the remote server connection command and press ENTER.

![Untitled](images/1-3.png)

4. This should be the output after connecting.

![Untitled](images/1-4.png)

-----------------------------------------------------------------------------
## PART 2 - CLONE PROJECT REPOSITORY AND DEPLOY THE API
-----------------------------------------------------------------------------

1. **Add the ssh key of the instance to Zuitt Git.**
	-	Use the following command to generate and copy the ssh key

```sudo
curl -sSf https://raw.githubusercontent.com/zuittclark/aws_backend_hosting_script/master/v2.1/bc/sshkeygen.sh | bash
```

This should be the output:

![Untitled](images/2-1.png)

2. Copy the generated SSH

![Untitled](images/2-2.png)


3. **Go to your Zuitt Git account and add the public ssh key to Settings.**
	-	Settings > SSH/GPG Keys > Add Key

![Untitled](images/2-3.png)


4. **Clone the CSP2 project repository to your remote server**
	-	Copy the ssh link of your repository

![Untitled](images/2-4.png)


5. **Clone your repository to the remote server**

	-	example:
```sudo
git clone git@ec2-54-147-90-61.compute-1.amazonaws.com:jerry.cabuntucan/csp2-cabuntucan.git
```

This should be the output:

![Untitled](images/2-5.png)

Type *ls* to see the folder.

![Untitled](images/2-6.png)


6. **Start the deployment step.**
	-	Navigate through the folder and go to the capstone folder in the backend and type ls to see the contents of the folder, you should see your project files and folders.

	-	example:
```sudo
cd csp2-cabuntucan
```

![Untitled](images/2-7.png)


7. Inside your project directory, configure your server by executing the following command.

```sudo
curl -sSf https://raw.githubusercontent.com/zuittclark/aws_backend_hosting_script/master/v2.1/bc/setup_v2.1.sh | bash -s -- <assigned number>
```

**Note that the <assigned number> here pertains to the assigned number given to you.**

example:

```sudo
curl -sSf https://raw.githubusercontent.com/zuittclark/aws_backend_hosting_script/master/v2.1/bc/setup_v2.1.sh | bash -s -- 9
```

I used 9 since I am the bootcamper 9

![Untitled](images/2-8.png)

Then press enter and wait for a few minutes…

**This should be the output**

![Untitled](images/2-9.png)


**And that’s done! You have successfully deployed your application. BUT.. to use our LIVE API URL we need to update our project’s index.js …**


-----------------------------------------------------------------------------
## PART 3 - UPDATING OUR PROJECT AND RE-DEPLOYING
-----------------------------------------------------------------------------


1. Go to this link *{AppScript Web App}* and search for your instance information by using your registered email. Then copy the Webhook URL.

![Untitled](images/3-1.png)


2. **Add the webhook URL to your csp2 project repository’s Webhooks tab**
	-	Settings > Webhooks > Add Webhook > Gitea

![Untitled](images/3-2.png)


3. Add the URL to the “Target URL*”  field and save the webhook.


![Untitled](images/3-3.png)
![Untitled](images/3-4.png)


This should be the output

![Untitled](images/3-5.png)

**IMPORTANT NOTE: Step A and step B should be done once only.**

*Note: The following steps can be used to re-deploy our application to our remote server everytime we add changes to our capstone project.*


4. **Make changes to your project.**
	-	Go to your project folder in Sublime Text editor and open index.js

![Untitled](images/3-6.png)


-	Update the following:
	-	Port number to the assigned port number
	- 	Main API routes to use the prefix assigned to you

It should look like this

![Untitled](images/3-7.png)


5. Commit and Push the changes to our remote repository.

6. Open your webhook URL in the browser to see the logs of the deployment to check if it was redeployed successfully.


![Untitled](images/3-8.png)

*NOTE: Since we set up our webhook in our project repository in Zuitt Git. Everytime we push changes to our project, it will automatically redeploy our application to the latest changes we committed.*


-----------------------------------------------------------------------------
== END ==
-----------------------------------------------------------------------------

**MONITOR YOUR SERVER IF IT IS RUNNING PROPERLY AND FOR DEBUGGING PURPOSES**
*NOTE: You need to connect first inside your AWS server instance.*

-	To check the status of your application you can use the following command:

```
pm2 status
```

![Untitled](images/3-9.png)

- 	To check the console logs of your application:

```
pm2 logs
```

![Untitled](images/3-10.png)


- 	To restart the server: (note: change the <name> with the assigned prefix to you)

```
pm2 restart <name>
```

![Untitled](images/3-11.png)





