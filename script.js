function myAlert() {
    alert("Documents Successfuly Connected!");
}

const mutation = `
    mutation {
        changeUserStatus(input: {clientMutationId: "YOUR_USER_ID", emoji: ":rocket:", expiresAt: "2021-05-09T00:00:00", limitedAvailability: true,  message:"Working on an API tutorial"}) {
                    clientMutationId
                    status {
                        message
                        emoji
                        updatedAt
                    }
            }    
        }
                `;


const url = "https://api.github.com/graphql";
let opts = {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer YOUR_PERSONAL_ACCESS_TOKEN" },
    body: JSON.stringify({query: mutation })
    };

    
fetch(url, opts)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);