# Cache-22
Breaking the loop of digital privacy friction. Cache 22 is a local, zero-click consent manager that automatically opts you out of web trackers.

**Deterministic Zero-Click Consent Management for Modern Browsers**

Cache 22 is a browser extension designed to eliminate the friction of digital privacy negotiations. It automates the rejection of non-essential tracking cookies by programmatically interacting with Consent Management Platforms (CMPs).

Built on the principle of **Privacy by Default**, it ensures that users do not have to sacrifice time to exercise their legal right to data protection.


# Overview

The modern web presents a **"Catch-22"** for users:

- Spend significant time navigating deceptive **Choice Architecture** to reject trackers  
- Or surrender privacy to access content quickly  

Data suggests that **over 70% of users click "Accept All"** purely due to decision fatigue and intentionally complex reject pathways.

**Cache 22 solves this problem** by acting as a deterministic proxy. It identifies cookie banners as they load in the DOM and executes the **Reject** or **Necessary Only** pathway automatically, requiring **zero user interaction**.



# Features

## Deterministic Rejection Logic
Uses a **rule-based engine** instead of probabilistic models to ensure high reliability and prevent accidental **Accept** clicks.

## Deceptive UI Bypass
Designed to ignore hidden formatting, non-breaking spaces, and zero-width characters used by websites to hide reject buttons.

## Shadow DOM Penetration
Capable of interacting with encapsulated web components where modern CMPs (such as OneTrust) often hide consent interfaces.

## Transparent Interaction
Temporarily highlights targeted elements with a **high-contrast red border** to provide visual feedback of the automated action.

## Privacy Reporting
Injects a **local UI notification** explaining the specific category of trackers blocked on each website.

## Local Execution
Runs entirely inside the browser sandbox with **no external APIs**, ensuring the privacy tool itself cannot become a tracking vector.



# Tech Stack

| Component | Technology | Description |
|-----------|------------|-------------|
| Extension Framework | Manifest V3 | Secure and high-performance browser extension standard |
| Core Logic | Vanilla JavaScript | Fast DOM manipulation and string processing |
| Observer API | MutationObserver | Detects dynamically injected cookie banners |
| Styling | CSS3 | High priority style injection using `!important` overrides |



# Demo Video

(https://github.com/user-attachments/assets/cf60abf7-07ef-46e6-ae5d-5310a5b8c029)





# Screenshots

## News Site Modal (Blocked)

<img width="1071" height="517" alt="image" src="https://github.com/user-attachments/assets/35918e58-982f-4833-af1f-3d729d567c0e" />

<img width="1080" height="530" alt="image" src="https://github.com/user-attachments/assets/43bb1982-3a2a-4d77-915e-eedd2cd2a526" />



## E-Commerce Bar (Rejected)

<img width="1080" height="526" alt="image" src="https://github.com/user-attachments/assets/f99c7333-6ed4-475d-b9af-3689eba6e700" />


## Banking Toast (Removed)

<img width="1080" height="529" alt="image" src="https://github.com/user-attachments/assets/f7c09d99-e53a-4431-a6e6-d98a2a24d010" />

<img width="1080" height="527" alt="image" src="https://github.com/user-attachments/assets/7a4b8a15-76a5-4936-b7f2-19dc61da8ed8" />

## The Guardian Cookie Banner (Auto Rejected)

<img width="1080" height="525" alt="image" src="https://github.com/user-attachments/assets/6ecfc70b-e2f8-4b38-b9bd-62e5d791cef2" />


Example of Cache 22 automatically selecting the **"No, thank you"** option on the Guardian website, rejecting non-essential tracking cookies without requiring user interaction.





# Workflow

## 1. Initialization
The extension content script is injected into **all frames** of a website at `document_start`.  
This includes **iframes** to ensure sub-domain trackers are detected.

## 2. Polling & Observation
The engine combines:

- High-frequency polling  
- `MutationObserver`

to detect cookie banners as soon as they appear in the DOM.

## 3. Text Cleansing
When a button candidate is detected, its inner text is cleaned by removing:

- HTML entities  
- Extra spaces  
- Hidden spans  
- Invisible characters  

This prevents sites from bypassing detection using formatting tricks.

## 4. Keyword Matching
The cleaned string is compared against a curated list of **rejection keywords**, including:

- strictly necessary  
- no thank you  
- decline all  
- reject all  

## 5. Visual Feedback
If a match is detected, the script injects **high priority CSS styles** such as:

- border
- background-color
- box-shadow

These use the `!important` flag to ensure the action is visible to the user.

## 6. Execution
An automated **click event** is triggered on the detected button.

At the same time, a **Privacy Report widget** is generated locally to explain:

- what trackers were blocked  
- why the action was taken



# Installation

## Prerequisites

- Google Chrome  
- Any Chromium-based browser (Brave, Edge, etc.)



## Steps

1. Clone the repository

```
git clone https://github.com/your-username/cache-22.git
```

2. Open Chrome and go to

```
chrome://extensions/
```

3. Enable **Developer Mode** (top right corner)

4. Click **Load unpacked**

5. Select the **Cache 22 root folder**

6. In extension settings, enable

```
Allow access to file URLs
```

This allows testing with local demo files.



# Built For

**ByteCamp Hackathon 2026**

Cache 22 was developed as part of **ByteCamp 2026**, focusing on building practical privacy-first tools for the modern web.

**Deterministic Privacy. Zero Friction.**

# Team Members

- Vibha Madabushi  
- Indrayani Patil
- Nishalini Kanthakumar 
- Akanksha Maurya  

# License

This project is licensed under the **MIT License**.
