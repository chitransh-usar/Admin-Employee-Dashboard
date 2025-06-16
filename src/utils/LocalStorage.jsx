

const employees = [
    {
        "id": 1,
        "firstName": "CK",
        "email": "ck@2.com",
        "password": "123",
        "taskCounts": {
            "active":2,
            "newTask":1,
            "completed":1,
            "failed":1,
        },
        "tasks": [
            {
                "taskTitle": "Prepare Sales Report",
                "taskDescription": "Compile the sales data for Q1.",
                "taskDate": "2025-03-10",
                "category": "Reports",
                "active": true,
                "newTask": true,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss project progress with the client.",
                "taskDate": "2025-03-12",
                "category": "Meetings",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Update CRM",
                "taskDescription": "Enter the latest client interactions into the system.",
                "taskDate": "2025-03-08",
                "category": "Data Entry",
                "active": false, 
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
     
    },
    {
        "id": 2,
        "firstName": "Ravi",
        "email": "ravi@2.com",
        "password": "123",
        "taskCounts": {
            "active":5,
            "newTask":2,
            "completed":1,
            "failed":6,
        },
        "tasks": [
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review the new feature code submitted by the team.",
                "taskDate": "2025-03-07",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Bug Fixing",
                "taskDescription": "Resolve the reported issues in the application.",
                "taskDate": "2025-03-09",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Team Standup",
                "taskDescription": "Attend the daily standup meeting.",
                "taskDate": "2025-03-10",
                "category": "Meetings",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Documentation",
                "taskDescription": "Update project documentation.",
                "taskDate": "2025-03-11",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
      
    },
    {
        "id": 3,
        "firstName": "Priya",
        "email": "priya@2.com",
        "password": "123",
        "taskCounts": {
            "active":4,
            "newTask":2,
            "completed":4,
            "failed":2,
        },
        "tasks": [
            {
                "taskTitle": "Social Media Campaign",
                "taskDescription": "Plan the next week's social media posts.",
                "taskDate": "2025-03-08",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Market Research",
                "taskDescription": "Analyze competitor strategies.",
                "taskDate": "2025-03-12",
                "category": "Research",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Outreach",
                "taskDescription": "Follow up with potential leads.",
                "taskDate": "2025-03-09",
                "category": "Sales",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
     
    },
    {
        "id": 4,
        "firstName": "Neha",
        "email": "neha@2.com",
        "password": "123",
        "taskCounts": {
            "active":10,
            "newTask":0,
            "completed":6,
            "failed":4,
        },
        "tasks": [
            {
                "taskTitle": "Inventory Check",
                "taskDescription": "Audit the current stock levels.",
                "taskDate": "2025-03-07",
                "category": "Logistics",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Supplier Meeting",
                "taskDescription": "Negotiate new supply contracts.",
                "taskDate": "2025-03-11",
                "category": "Business",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Warehouse Inspection",
                "taskDescription": "Ensure safety compliance in the warehouse.",
                "taskDate": "2025-03-10",
                "category": "Safety",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    
    },
    {
        "id": 5,
        "firstName": "Rajesh",
        "email": "rajesh@2.com",
        "password": "123",
        "taskCounts": {
            "active":2,
            "newTask":2,
            "completed":3,
            "failed":1,
        },
        "tasks": [
            {
                "taskTitle": "Product Testing",
                "taskDescription": "Evaluate the new product prototype.",
                "taskDate": "2025-03-08",
                "category": "Quality Control",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Create User Guide",
                "taskDescription": "Draft a user manual for the product.",
                "taskDate": "2025-03-12",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Customer Support",
                "taskDescription": "Handle incoming support queries.",
                "taskDate": "2025-03-09",
                "category": "Customer Service",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
     
    }
];

const admin = [{
    "id": 1,
    "firstName": "Vikram",
    "email": "admin@me.com",
    "password": "123"
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
   
    return { employees, admin }
}
