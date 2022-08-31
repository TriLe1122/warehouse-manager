const packages = [{
  priority: true,
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priority: true,
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priority: false,
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priority: false,
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priority: true,
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: 'adfasdfdasfasf'
},
{
  priority: false,
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priority: false,
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]


//                                         VVVVVV the div id in html

let tableElement = document.getElementById("table")



function drawPackages(packages) {
  let template = ``
  packages.forEach(package => {
    template += `
    <table class="table">
  <thead>
    <tr class= " bg-light">
      <th scope="col">To:</th>
      <th scope="col">Tracking Number:</th>
      <th scope="col">Heavy:</th>
      <th scope="col">Priority:</th>
      <th scope="col">Fragile:</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>${package.to}</td>
      <td >${package.trackingNumber}</td>
      <td>${package.weight}</td>
      <td>${package.priority}</td>
      <td>${package.isFragile}</td>
    </tr>
    </tr>
  </tbody>
</table>
    `
  });
  // @ts-ignore
  tableElement.innerHTML = template

}

function filterByWeight() {
  let heavyPackages = packages.filter(package => package.weight >= 5)
  drawPackages(heavyPackages)

}

function filterByFragile() {
  let fragilePackages = packages.filter(package => package.isFragile)
  drawPackages(fragilePackages)

}

function filterByPriority() {
  let priorityPackages = packages.filter(package => package.priority)
  drawPackages(priorityPackages)
}

function drawAllPackages() {

}




drawPackages(packages)