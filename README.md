

# Run and deploy app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
##How to get Gemini API Key
Obtaining a Gemini API key is straightforward.

**Prerequisites:**
* A Google Account (Gmail, etc.).
* You must be in a [supported country](https://ai.google.dev/available_regions).

**Step-by-Step Guide:**
1.  **Navigate to Google AI Studio:**
    Go to [aistudio.google.com](https://aistudio.google.com/).
2.  **Sign In:**
    Log in with your Google account. If it is your first time, you may need to accept the Terms of Service.
3.  **Locate the API Key Button:**
    On the left-hand sidebar, look for the **"Get API key"** button (often an icon of a key).
4.  **Create the Key:**
    Click **"Create API key"**. You will typically see two options:
    * **Create API key in new project:** The easiest option. It automatically sets up a wrapper project for you.
    * **Create API key in existing project:** Select this if you already have a specific Google Cloud project you want to link this key to.
5.  **Copy and Save:**
    Your API key string (beginning with `AIza...`) will appear. **Copy this immediately** and save it in a secure location (like a `.env` file or password manager).
    * *Warning:* Do not share this key publicly or commit it to GitHub.


### Important Security Note
Never hardcode your API key directly into your code (e.g., `const apiKey = "AIza..."`). Instead, use environment variables:
* **Mac/Linux:** `export GEMINI_API_KEY="your_key_here"`
* **Windows:** `set GEMINI_API_KEY="your_key_here"`

Then access it in code (e.g., in Python: `os.environ["GEMINI_API_KEY"]`).

