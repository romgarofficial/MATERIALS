# Capstone 2 AWS Deployment (Instructor Guide)

We will utilize Amazon Web Services' Elastic Compute Cloud (EC2) service to set up a web server. Think of an **EC2 instance** as a virtual computer in the cloud. Additionally, AWS offers a service called Elastic IP (EIP) that provides a public IP address to our EC2 instance.

Our objective is to create an AWS Backend Server, which involves provisioning an EC2 instance with an associated public IP address. This setup allows direct access to the server from a web browser, as it contains all the required software to host a web application.


-----------------------------------------------------------------------------

## For Instructor prep

**NOTE to Instructor:**
This set up needs to be done by *Intructor* before the AWS hosting discussion.

-----------------------------------------------------------------------------
## PART 1 - Launch an EC2 Instance
-----------------------------------------------------------------------------

1. First step is to launch an instance. We'll host our WebServer instances in AWS's **us-east-2 (Ohio) region**, so make sure that upon logging in to AWS console your region is **Ohio**.

![Untitled](readme-images/2.png)


2. Go to **EC2 console**. Type **"ec2"** in the search bar and click the first link in the result under *Services*.

![Untitled](readme-images/3.png)


3. In launching our WebServer, we'll use a predefined **launch template**. In the navigation links of
the *EC2 console (left-hand side)*, click the link to **"Launch Templates"**.

![Untitled](readme-images/4.png)


4. From the table select row with Launch template name of **"JAABSWebServerTemplate"**. Then in the
*Actions* dropdown select **"Launch instance from template"**.

![Untitled](readme-images/5.png)


**NOTES**

- This template has preconfigured settings for a web server. It includes a "launch script" that will
install necessary software.
- The script also creates a user group named *bootcamper*. This will be used in the latter steps.
- List of software/packages installed in the instance

| Installed via launch script in template      | Installed by default      | 
| --------- | --------- | 
| Node.js  | Git  | 
| NPM  | Python 3.10.4 (packaged with Ubuntu 22.04)  | 
| PM2  | 
| Nginx  | 


5. Check all the details of the instance to be launch on the left side. If everything is correct, click the **"Launch Instance"** button.

**NOTES**

- Under field *"Source template version"*, make sure that the latest version is selected.
- Make sure you have a copy of the key-pair file: [zuitt_keypair_us_east2.pem](zuitt_keypair_us_east2.pem). 
	- Save the file to the .ssh folder of your current OS accounts.
		- For Windows, it will be in `C:\Users\username\.ssh` directory.
		- For Linux, it will be in `/home/username/.ssh` directory.
		- For MacOS, it will be in `~/.ssh` directory.

![Untitled](readme-images/6.png)

6. You will be prompted once launch is successful.

![Untitled](readme-images/7.png)


7. You can now navigate to the **Instances page**. In the navigation links of the EC2 console (left-hand side), click the link to **"Instances"**. Select the row of your instance. If you are having difficulties finding, you can type the instance ID in the search box. Once selected, check on the details tab. Information under this tab will be useful.

![Untitled](readme-images/8.png)


8. Change the instance's name for easier identification. Just click on the edit icon beside the instance's name and input your desired name in the text box and click the Save button.

You can change the name to **`b<batch_sid>-g<count_per_class>`** for easier tracking.
Example for Batch 270, you can rename it to b270-g1.

![Untitled](readme-images/9.png)





## Allocate and associate IP address

The provided public IP address of the instance upon launch is not persistent. It will change if you restart the instance. We'll use AWS's Elastic IP (EIP) so that our WebServers will have permanent public IP address.


1. In the navigation links of the EC2 console (left-hand side), under **"Network & Security"**, click the link to **"Elastic IPs"**. Then click the **"Allocate Elastic IP address"** button.


![Untitled](readme-images/10.png)


2. In the following page, fill-out with values similar to the image below and click the **Allocate** button.

We add the PJ tag for easier management of resources. Just Search the *Key - PJ* and for the *Value - JAABS*

![Untitled](readme-images/11.png)


3. Under **Allocated IPv4** field, select your newly created IP Address. 

![Untitled](readme-images/12.png)


4. Click the **Associate Elastic IP address** button.

![Untitled](readme-images/13.png)


5. Under **Instance** field select your desired instance. You can input the instance ID to filter-out the list. Finally, click the **Allocate** button.

![Untitled](readme-images/14.png)


6. Then the successful message will appear.

![Untitled](readme-images/15.png)


7. Go to **Instances** page and check the details of the instance you associated the newly allocated IP. The IP should be reflected under "Public IPv4 address" and "Public IPv4 DNS".
It also shows the Elastic IP address we associated a while ago.

![Untitled](readme-images/16.png)


8. You can check if the web server is online. Just copy the *"Public IPv4 address"* or *"Public IPv4 DNS"* in your browser. You should see the Nginx welcome screen.

![Untitled](readme-images/17.png)


**NOTES**

- You can change the state of an instance using the **"Instance state"** dropdown. Just check your desired instance or instances and select the status in the dropdown.

![Untitled](readme-images/18.png)

- The table below shows some the instance status and what they mean. For complete reference
of "Instance lifecycle", you may refer to this [link](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html).


| Instance state      | Description      | 
| --------- | --------- | 
| running  | The instance is running and ready for use.  | 
| stopped | The instance is shut down and cannot be used. The instance can be started
at any time.  | 
| terminated  | The instance has been permanently deleted and cannot be started.  |




-----------------------------------------------------------------------------
## PART 2 -  ADDING THE NEW INSTANCE TO THE TEMPLATE
-----------------------------------------------------------------------------

1. Make a copy of all files needed using the templates [here](https://drive.google.com/drive/u/0/folders/1nJ8BefjhZY_dJD_LEBLyt9B4jfOKs_Rk). Replace the [TEMPLATE] with the batch name. E.g. [B322]
2. Create a new instance from the launch template.
3. Rename the instance accordingly 
4. Associate an Elastic IP to the instance.
5. Copy the public DNS URL and paste it into EC2 INSTANCE: Make sure that there is no “https://” at the beginning and a “/” at the end of the URL

![Untitled](readme-images/2-1.png)

6. Connect to the instance via SSH. You can copy the command from **Main usr**:

![Untitled](readme-images/2-2.png)



-----------------------------------------------------------------------------
## PART 3 - COLLECTING AND ADDING BOOTCAMPERS’ PUBLIC SSH KEY
-----------------------------------------------------------------------------

1. Send to the bootcampers the form that you copied to collect their ssh keys
2. Add the Email, Fullname, and SSH-Key to the sheet

![Untitled](readme-images/3-1.png)


3. Generate Script using this [Script Generator](https://zuittclark.github.io/script-generator-cpst2Hosting/). Add the bootcampers’ Full Name and SSH key to the table and generate script then copy the command generated and execute it in the instance’s terminal.

![Untitled](readme-images/3-2.png)

![Untitled](readme-images/3-3.png)


Click the “Get Script Link” button to generate the link. 
*Note: Sometimes it asks for authorization, just authorize it and click the button again.*

![Untitled](readme-images/3-4.png)


This should be the output in the terminal


![Untitled](readme-images/3-5.png)

4. Add bootcamper server to nginx (This still needs to be done manually)

```sudo
sudo nano /etc/nginx/sites-available/default
```

![Untitled](readme-images/3-6.png)

5. Add the following under the "server_name_;" block:

```sudo
location /webhook {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            proxy_pass http://localhost:4100;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        location /b1 {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            proxy_pass http://localhost:4001;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        location /b2 {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            proxy_pass http://localhost:4002;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        location /b3 {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            proxy_pass http://localhost:4003;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
        location /b4 {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            proxy_pass http://localhost:4004;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        location /b5 {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            proxy_pass http://localhost:4005;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        location /b6 {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            proxy_pass http://localhost:4006;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        location /b7 {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            proxy_pass http://localhost:4007;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        location /b8 {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            proxy_pass http://localhost:4008;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        location /b9 {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            proxy_pass http://localhost:4009;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        location /b10 {
            # First attempt to serve request as file, then
            # as directory, then fall back to displaying a 404.
            proxy_pass http://localhost:4010;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
```

6. After pasting the line into the default file, restart nginx and check for the status

```sudo
sudo systemctl restart nginx
sudo systemctl status nginx
```

-----------------------------------------------------------------------------
## PART 4 -  SETTING UP THE APPSCRIPT FOR THE SEARCH APP
-----------------------------------------------------------------------------
*Note: This is useful so that the bootcamper will no longer always ask for their information regarding the CSP2 deployment if they forget them.*

1. Change the batch name in cell B1 since this will be reflected in the web app. Then, open Extensions > App Script 

![Untitled](readme-images/4-1.png)


2. Create a new deployment

![Untitled](readme-images/4-2.png)

3. Set “Execute as” to “Me” and “Who has access” to “Anyone”, then deploy

![Untitled](readme-images/4-3.png)

4. Authorize access to our deployment and authorize with your Google Account

![Untitled](readme-images/4-4.png)

![Untitled](readme-images/4-5.png)

![Untitled](readme-images/4-6.png)


*Note: Sometimes it will warn you that the connection is not secure, just ignore that and continue to the page.*


5. **Deployment complete!** You can now copy the URL and share it with your bootcampers so that they can access their own information by using their Email. The information includes SSH connection command, webhook URL, Deployed API link, etc.

![Untitled](readme-images/4-7.png)

![Untitled](readme-images/4-8.png)

**Example Search result:**

![Untitled](readme-images/4-9.png)

*Also, since the deployed URL is too long, you can also use a URL shortener for this one like https://bitly.com/ but this is optional.*



-----------------------------------------------------------------------------
## PART 5 -  SETTING UP THE WEBHOOK HANDLER SERVER
-----------------------------------------------------------------------------

*Note: The webhook handler server is a simple ExpressJS app that is responsible for listening to any changes in the remote repository of the bootcamper as long as the bootcamper has already added their webhook URL in the project repository’s Webhook tab.*


*It is going to be triggered every time there are commits added to the remote repository of the bootcampers and it will run a redeployment script according to which bootcamper committed the changes.*

1. Execute the following commands in the home directory “~$” to download, install, and set up the webhook server automatically.

```sudo
curl -sSf https://raw.githubusercontent.com/zuittclark/aws_backend_hosting_script/master/v2.1/inst/installWebhookServer.sh | bash
```

2. Wait for a couple of minutes and if it is finished, this should be the output

![Untitled](readme-images/5-1.png)


3. Test the server connection by accessing the instance URL with the /webhook endpoint

![Untitled](readme-images/5-2.png)


**MONITOR YOUR SERVER IF IT IS RUNNING PROPERLY AND FOR DEBUGGING PURPOSES**

- To check the status of your application you can use the following command:

```
pm2 status
```

- To check the console logs of your application:

```
pm2 logs
```


- To restart the server:

```
pm2 restart webhook-server
```

- To stop the server

```
pm2 stop
```

- To delete the server

```
pm2 delete
```


-----------------------------------------------------------------------------
## For Bootcampers


#### Refer to [Capstone 2 - AWS Deployment Guide.md](Csp2-Guide/Capstone2-AWS_Deployment_Guide.md) for the next steps that will be performed for each **user/bootcamper**.

-	Feel free to duplicate the [Csp2-Guide](Csp2-Guide/) to your batch resources.
-	Teach the students how to open the .md file to their browser

**Install Markdown Preview Browser**

1. Press **Ctrl + Shift + P**
	-	Choose **Package Control: Install Package**

2. Search the Markdown and download it.

**To Open .md file using Markdown**

1. Press **Ctrl + Shift + P**
2. Search for and select **Markdown Preview: Preview in Browser**
3. Click **Markdown** to preview in browser.

-----------------------------------------------------------------------------










