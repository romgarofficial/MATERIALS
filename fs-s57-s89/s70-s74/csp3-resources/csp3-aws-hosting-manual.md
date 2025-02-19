# Capstone 3 AWS Hosting



## Create an S3 Bucket for Hosting

1. Log-in to AWS console, navigate to S3. Click "Create Bucket".

2. Fill-out the fields. Under *"Block Public Access settings for this bucket"*, **uncheck** *"Block all public
access"*. Click *"Create bucket"* button.

3. Enable static website hosting.
	
	After the bucket is created, select it and go under Properties tab. Under the *"Static website hosting"*
	select section (bottom part of the page) click the *Edit* button. Select *Enable* and click the *"Save changes"*
	button.

4. Update bucket policy.

	Go to *Permissions* tab, click the *Edit* button under the *"Bucket Policy"* section. Paste these lines:

```
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "PublicReadGetObject",
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": YOUR_BUCKET_ARN
		}
	]
}
```

Note: Replace the value of **YOUR_BUCKET_ARN** to your actual Bucket ARN. It is readily available for copying in the Bucket Policy editor.

Click the *"Save changes"* button.


## Prepare your source code

1. Clone your repository to your local machine.

2. Perform necessary installations.
	
	Note: Before installing, make sure you are using the correct node version using node --version.

Run command:

```bash
npm install
```

3. Edit the file named `.env.local.` Change the value of `REACT_APP_API_URL`. This should reflect the value of your backend (your capstone2). Example: http://ec2-3-21-224-210.us-east-2.compute.amazonaws.com/b4

4. *Double check if everything is working*. Once confirmed, your application should now be ready for
production deployment.

5. Build the react application. Run command:

```bash
npm run build
```

If successful you should find a folder named `build` in your project folder (the folder where `package.json` is located).


## Host your files in the Amazon S3 bucket

1. Log-in back to AWS console, navigate to S3 and select the bucket we created from the previous steps. Under *Objects* tab click the *Upload* button.

Upload all the contents of the `build` folder.

2. Check your application.
	In Amazon S3 console, under *Properties tab* and *"Static website hosting"* section you'll find your website endpoint. You can copy it and paste it on the address bar of your browser to check if everything is working. You can just also click on the link and a new tab will open.










