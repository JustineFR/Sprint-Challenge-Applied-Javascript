// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabTopics = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    // console.log(response.data.topics)
    const topics = response.data.topics
    // console.log('topics: ', topics)
    topics.forEach(topic => {
        tabTopics.appendChild(CreateTab(topic))
    })
})
.catch(error => {
    console.log('There is an error: ', error)
})


function CreateTab(topic) {
    // Create element
    const tab = document.createElement('div')
    // Add class
    tab.classList.add('tab')
    // Add text content
    tab.textContent = topic
    // Append

    return tab;
}

CreateTab()