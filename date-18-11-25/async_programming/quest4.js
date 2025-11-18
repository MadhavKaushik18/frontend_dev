function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) reject("Server A failed!");
            else resolve("Server A responded in 2 seconds");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) reject("Server B failed!");
            else resolve("Server B responded in 3 seconds");
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(err => console.error("Error:", err));

Promise.race([serverA(), serverB()])
    .then(result => console.log("Fastest response:", result))
    .catch(err => console.error("Race error:", err));
