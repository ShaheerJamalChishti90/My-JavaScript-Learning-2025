import pandas as pd

# Data for the schedule
data = [
    ["August", "Mon 18 Aug", "For loop (counting, patterns, arrays basics)"],
    ["August", "Wed 20 Aug", "While loop & Do…While loop (comparison + practice)"],
    ["August", "Fri 22 Aug", "Functions (parameters, return values)"],
    ["August", "Mon 25 Aug", "Arrow functions + function practice"],
    ["August", "Wed 27 Aug", "Arrays (push, pop, length, indexing)"],
    ["August", "Fri 29 Aug", "Array methods (map, filter, forEach)"],
    ["September", "Mon 1 Sep", "Objects (key-value pairs, accessing, updating)"],
    ["September", "Wed 3 Sep", "Nested arrays & objects"],
    ["September", "Fri 5 Sep", "Practice: Mini contact list app (arrays + objects + loops)"],
    ["September", "Mon 8 Sep", "DOM basics (querySelector, getElementById)"],
    ["September", "Wed 10 Sep", "Changing HTML/CSS from JS (innerHTML, style)"],
    ["September", "Fri 12 Sep", "Event listeners (click, input, submit)"],
    ["September", "Mon 15 Sep", "Forms & getting user input"],
    ["September", "Wed 17 Sep", "Fetch API (GET request)"],
    ["September", "Fri 19 Sep", "Fetch API (POST request) + JSON parse/stringify"],
    ["September", "Mon 22 Sep", "Practice: Weather app using Fetch API"],
    ["September", "Wed 24 Sep", "Intro to Node.js (install, npm init, running JS in Node)"],
    ["September", "Fri 26 Sep", "Express basics (app.get, app.post)"],
    ["September", "Mon 29 Sep", "Sending data frontend → backend with fetch POST"]
]

# Create DataFrame
df = pd.DataFrame(data, columns=["Month", "Date", "Topic"])

# Save to Excel
file_path = './JavaScript_Class_Schedule.xlsx'
df.to_excel(file_path, index=False)
