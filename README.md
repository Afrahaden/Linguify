# Linguify - Text Translation Service

Linguify is a web application that enables users to translate text from one language to another using the Azure Text Translation API. It provides a user-friendly interface for entering text, selecting the target language, and obtaining the translation results.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)


## Getting Started

### Prerequisites

Before you start, make sure you have the following requirements installed:

- Python 3.x
- Flask
- Requests
- python-dotenv

You'll also need an Azure Text Translation API key and endpoint. Create a `.env` file in the project root and add the following:

```dotenv
KEY=your-azure-api-key
ENDPOINT=your-azure-endpoint
LOCATION=your-azure-location
```
### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Afrahaden/Linguify.git
   cd linguify
2. **Install the required dependencies:**
``` bash
pip install -r requirements.txt
```
3. **Usage:**
- Run the Flask application:
```bash
   flask run
```
- Open your web browser and go to http://localhost:5000.
- Enter the text, choose the target language, and click the "Translate" button.
- View the translation result and use the "Copy Text" button to copy the translated text to the clipboard.

## Connect with Me
[![GitHub](https://img.shields.io/badge/GitHub-Afrahaden-blue)](https://github.com/Afrahaden)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Afrah_Aden_Abdi-blue)](https://www.linkedin.com/in/afrah-aden-abdi-7993b01b7/)

