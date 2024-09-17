async function updatePost() {
    const title = document.querySelector(".title").value.trim();
    const content = document.querySelector(".content").value.trim();
    const url = document.querySelector(".url").value.trim();
    const id = document.querySelector(".id").value.trim();

    try {
        const response = await fetch("/api/post/" + id, {
            method: "PUT",
            body: JSON.stringify({ title, content, url }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            console.log("response", response);
            document.location.replace("/dashboard");
        } else {
            alert("Failed to update.");
        }
    } catch (err) {
        console.log(err);
    }
}

function deletePost() {

}

document.getElementById("updateBtn").addEventListener("click", updatePost);
document.getElementById("deleteBtn").addEventListener("click", deletePost);