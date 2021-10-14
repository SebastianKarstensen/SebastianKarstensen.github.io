const SkillCategory = {
    LANGUAGE : {
        key: "LANGUAGE",
        background: "bg-custom"
    },
    LIBRARY : {
        key: "LIBRARY",
        background: "bg-success"
    },
    FRAMEWORK : {
        key: "FRAMEWORK",
        background: "bg-warning"
    },
    TOOL : {
        key: "TOOL",
        background: "bg-info"
    },
    CONCEPT : {
        key: "CONCEPT",
        background: "bg-danger"
    }
}

const skillLevelInfo = {
    1: {
        title: "Beginner",
        description: "I understand the concepts and terminology regarding this."
    },
    2: {
        title: "Average",
        description: "I am confident using this in a practical setting."
    },
    3: {
        title: "Skilled",
        description: "I have used this on several occasions."
    },
    4: {
        title: "Specialist",
        description: "I know almost everything there is to know about this."
    },
    5: {
        title: "Expert",
        description: "I am fully proficient in this."
    }
}

const skills = [
    {
        "title": "Java",
        "link": "https://www.java.com/",
        "skillLevel": 5,
        "category" : SkillCategory.LANGUAGE
    },
    {
        "title": "HTML",
        "link": "https://www.w3schools.com/html/",
        "skillLevel": 5,
        "category" : SkillCategory.LANGUAGE
    },
    {
        "title": "CSS",
        "link": "https://www.w3schools.com/css/",
        "skillLevel": 5,
        "category" : SkillCategory.LANGUAGE
    },
    {
        "title": "JavaScript",
        "link": "https://www.javascript.com/",
        "skillLevel": 4,
        "category" : SkillCategory.LANGUAGE
    },
    {
        "title": "C++",
        "link": "https://www.cplusplus.com/",
        "skillLevel": 4,
        "category" : SkillCategory.LANGUAGE
    },
    {
        "title": "MySQL",
        "link": "https://www.mysql.com/",
        "skillLevel": 3,
        "category" : SkillCategory.LANGUAGE
    },
    {
        "title": "C#",
        "link": "https://docs.microsoft.com/en-us/dotnet/csharp/",
        "skillLevel": 3,
        "category" : SkillCategory.LANGUAGE
    },
    {
        "title": "Groovy",
        "link": "https://groovy-lang.org/",
        "skillLevel": 3,
        "category" : SkillCategory.LANGUAGE
    },
    {
        "title": "Python",
        "link": "https://www.python.org/",
        "skillLevel": 2,
        "category" : SkillCategory.LANGUAGE
    },
    {
        "title": "C",
        "link": "https://en.wikipedia.org/wiki/C_(programming_language)",
        "skillLevel": 2,
        "category" : SkillCategory.LANGUAGE
    },
    {
        "title": "F#",
        "link": "https://fsharp.org/",
        "skillLevel": 2,
        "category" : SkillCategory.LANGUAGE
    },
    {
        "title": "Scala",
        "link": "https://www.scala-lang.org/",
        "skillLevel": 2,
        "category" : SkillCategory.LANGUAGE
    },
    {
        "title": "Prolog",
        "link": "https://www.swi-prolog.org/",
        "skillLevel": 2,
        "category" : SkillCategory.LANGUAGE
    },
    {
        "title": "Bootstrap",
        "link": "https://getbootstrap.com/",
        "skillLevel": 4,
        "category" : SkillCategory.LIBRARY
    },
    {
        "title": "MDBootstrap",
        "link": "https://mdbootstrap.com/",
        "skillLevel": 4,
        "category" : SkillCategory.LIBRARY
    },
    {
        "title": "Guacamole",
        "link": "https://guacamole.apache.org/",
        "skillLevel": 4,
        "category" : SkillCategory.LIBRARY
    },
    {
        "title": "Mosquitto",
        "link": "https://mosquitto.org/",
        "skillLevel": 4,
        "category" : SkillCategory.LIBRARY
    },
    {
        "title": "Spock",
        "link": "https://spockframework.org/",
        "skillLevel": 4,
        "category" : SkillCategory.LIBRARY
    },
    {
        "title": "JUnit",
        "link": "https://junit.org/junit5/",
        "skillLevel": 3,
        "category" : SkillCategory.LIBRARY
    },
    {
        "title": "jQuery",
        "link": "https://jquery.com/",
        "skillLevel": 3,
        "category" : SkillCategory.LIBRARY
    },
    {
        "title": "React",
        "link": "https://reactjs.org/",
        "skillLevel": 2,
        "category" : SkillCategory.LIBRARY
    },
    {
        "title": "Spring",
        "link": "https://spring.io/",
        "skillLevel": 4,
        "category" : SkillCategory.FRAMEWORK
    },
    {
        "title": "Unreal Engine",
        "link": "https://www.unrealengine.com/",
        "skillLevel": 4,
        "category" : SkillCategory.FRAMEWORK
    },
    {
        "title": ".NET",
        "link": "https://dotnet.microsoft.com/",
        "skillLevel": 3,
        "category" : SkillCategory.FRAMEWORK
    },
    {
        "title": "Azure",
        "link": "https://azure.microsoft.com/",
        "skillLevel": 3,
        "category" : SkillCategory.FRAMEWORK
    },
    {
        "title": "Android",
        "link": "https://www.android.com/",
        "skillLevel": 3,
        "category" : SkillCategory.FRAMEWORK
    },
    {
        "title": "Unity",
        "link": "https://unity.com/",
        "skillLevel": 3,
        "category" : SkillCategory.FRAMEWORK
    },
    {
        "title": "Grails",
        "link": "https://grails.org/",
        "skillLevel": 3,
        "category" : SkillCategory.FRAMEWORK
    },
    {
        "title": "Arduino",
        "link": "https://www.arduino.cc/",
        "skillLevel": 3,
        "category" : SkillCategory.FRAMEWORK
    },
    {
        "title": "Docker",
        "link": "https://www.docker.com/",
        "skillLevel": 2,
        "category" : SkillCategory.FRAMEWORK
    },
    {
        "title": "Git",
        "link": "https://git-scm.com/",
        "skillLevel": 4,
        "category" : SkillCategory.TOOL
    },
    {
        "title": "MQTT",
        "link": "https://mqtt.org/",
        "skillLevel": 4,
        "category" : SkillCategory.TOOL
    },
    {
        "title": "Websockets",
        "link": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
        "skillLevel": 3,
        "category" : SkillCategory.TOOL
    },
    {
        "title": "Maven",
        "link": "https://maven.apache.org/",
        "skillLevel": 3,
        "category" : SkillCategory.TOOL
    },
    {
        "title": "Elasticsearch",
        "link": "https://www.elastic.co/",
        "skillLevel": 3,
        "category" : SkillCategory.TOOL
    },
    {
        "title": "Jenkins",
        "link": "https://www.jenkins.io/",
        "skillLevel": 2,
        "category" : SkillCategory.TOOL
    },
    {
        "title": "Terraform",
        "link": "https://www.terraform.io/",
        "skillLevel": 1,
        "category" : SkillCategory.TOOL
    },
    {
        "title": "Kubernetes",
        "link": "https://kubernetes.io/",
        "skillLevel": 1,
        "category" : SkillCategory.TOOL
    },
    {
        "title": "Clean Code",
        "link": "https://www.oreilly.com/library/view/clean-code-a/9780136083238/",
        "skillLevel": 5,
        "category" : SkillCategory.CONCEPT
    },
    {
        "title": "Scrum",
        "link": "https://www.scrum.org/",
        "skillLevel": 5,
        "category" : SkillCategory.CONCEPT
    },
    {
        "title": "REST",
        "link": "https://en.wikipedia.org/wiki/Representational_state_transfer",
        "skillLevel": 4,
        "category" : SkillCategory.CONCEPT
    },
    {
        "title": "CI/CD",
        "link": "https://www.redhat.com/en/topics/devops/what-is-ci-cd",
        "skillLevel": 2,
        "category" : SkillCategory.CONCEPT
    },
    {
        "title": "Microservices",
        "link": "https://martinfowler.com/articles/microservices.html",
        "skillLevel": 1,
        "category" : SkillCategory.CONCEPT
    }
]

let skillsData = new Map();
skills.forEach(skill => {
    skillsData.set(skill.title, skill);
});