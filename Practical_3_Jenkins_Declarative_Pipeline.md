# PRACTICAL 3 — Jenkins Declarative Pipeline

**Student:** Atharva Ahirrao | **GitHub:** https://github.com/Atharvaahirrao/pract5

---

## Aim
Create and execute a Jenkins Declarative Pipeline connected to a GitHub repository.

## Steps

### 1. Open Jenkins
- Open browser → `http://localhost:8080`
- Login with username and password

### 2. Create New Item
- Click **New Item**
- Name: `prac3`
- Select **Pipeline** → Click **OK**

### 3. Pipeline Script
- Scroll to **Pipeline** section
- Definition: **Pipeline script**
- Paste the code below

```groovy
pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master',
                url: 'https://github.com/Atharvaahirrao/pract5'
            }
        }
        stage('Build') {
            steps {
                echo "Running Build Steps..."
                bat 'dir'
            }
        }
        stage('Unit Test') {
            steps {
                echo "Running Unit Test..."
                bat 'dir'
            }
        }
        stage('Integration Test') {
            steps {
                echo "Running Integration Test..."
                bat 'echo Test passed successfully'
            }
        }
    }
    post {
        success {
            echo "Pipeline completed successfully"
        }
        failure {
            echo "Pipeline failed"
        }
    }
}
```

### 4. Save and Build
- Click **Save**
- Click **Build Now**
- Wait for build to finish

### 5. Verify
- Click build `#1` → Click **Pipeline Overview** → All stages GREEN ✓
- Click **Console Output** → Last line: `Finished: SUCCESS`
