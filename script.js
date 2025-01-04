const currentYear = new Date().getFullYear()

console.log(currentYear)

const data = [
    {
        contract: "0x3D883BF47aE79035dfE8906Cf6a5171A0abEA0EA",
        title:"The Protector",
        creation: "1/3/2025",
        claiming_expire: "1/27/2025"
    },
    {
        contract: "0x68Da9CECDBF451549D0fd9b74f7f3D0cd467Ba6d",
        title:"The Little Lame Prince",
        creation: "1/3/2025",
        claiming_expire: "1/27/2025"
    },
    {
        contract: "0x04132B9b311E0107Ba282a7F4d9c48734DF47D4B",
        title:"Captain Ted",
        creation: "1/3/2025",
        claiming_expire: "1/27/2025"
    },
    {
        contract: "0xA4e7196fbd671C2Bec86a1745BF747Fbe8C61c9A",
        title:"Gentlemmen Prefer Blondes",
        creation: "1/3/2025",
        claiming_expire: "1/27/2025"
    },
    {
        contract: "0x4ef7228EbEd2655e3183aF2eccB41aCe580551Ba",
        title:"Four-Day Planet",
        creation: "1/3/2025",
        claiming_expire: "1/27/2025"
    },
    {
        contract: "0xFD028CAf2bd2363aee5d17DD9330D075b65E1806",
        title:"Spacehounds of IPC",
        creation: "1/3/2025",
        claiming_expire: "1/27/2025"
    },
    {
        contract: "0x4BDE1EaE81914909C8979d85e3C03D5434D60B79",
        title:"As a Man Thinketh",
        creation: "12/30/2024",
        claiming_expire: "1/20/2025"
    },
    {
        contract: "0xEb94A729c3eD6a06341C1bbbe172549Dd8773127",
        title:"Stolen Idols",
        creation: "12/30/2024",
        claiming_expire: "1/20/2025"
    },
    {
        contract: "0x9d42eE98974dDCE760d1ffB022dE4eBFF593a189",
        title:"Soldiers' Pay",
        creation: "12/30/2024",
        claiming_expire: "1/20/2025"
    },
    {
        contract: "0x216dac77861fB0432cF85E9E3Ff5C9ff781dac41",
        title:"Wings and the child",
        creation: "12/30/2024",
        claiming_expire: "1/20/2025"
    },
    {
        contract: "0x07994fD9De10b50197B3d7C8246d64A71fd0dD87",
        title:"Rebellion",
        creation: "12/30/2024",
        claiming_expire: "1/20/2025"
    },
    {
        contract: "0x9De0A80066a3c5a7279CabE9519448B1ffC9128e",
        title:"The Black Tulip",
        creation: "12/30/2024",
        claiming_expire: "1/20/2025"
    },
    {
        contract: "0x00026Fe8b787d0c4c897Bc8dE31CcC50d823e382",
        title:"Cricket on the Hearth",
        creation: "12/23/2024",
        claiming_expire: "1/12/2025"
    },
    {
        contract: "0xDFF514042822c3304CC5A0CD8fFDaD260f9a3162",
        title:"The Great Shadow",
        creation: "12/23/2024",
        claiming_expire: "1/12/2025"
    },
    {
        contract: "0x94d5FD0c6757BdD1C61062f5A973603b9e6eEabA",
        title:"The King in Yellow",
        creation: "12/23/2024",
        claiming_expire: "1/12/2025"
    },
    {
        contract: "0x7819982c650D831F2ed13D9DB0e00b99e5E98606",
        title:"Nutcracker and King Mouse",
        creation: "12/10/2024",
        tier3_final: "12/29/2024",
        claiming_expire: "12/30/2024"
    },
    {
        contract: "0x87543EAD491e64BA5A358c3901c86e448Be3865e",
        title:"Christmas Comes But Once a Year",
        creation: "12/10/2024",
        tier3_final: "12/29/2024",
        claiming_expire: "12/30/2024"
    },
    {
        contract: "0x944F412D04A74B82c261f8540DB851D7A2D74ab5",
        title:"Life and Adventures of Santa Claus",
        creation: "12/10/2024",
        tier3_final: "12/29/2024",
        claiming_expire: "12/30/2024"
    },
    {
        contract: "0x138Fc079CFCD214A7afF4D38533A9574D4aDF463",
        title:"Beyond the City",
        creation: "12/6/2024",
        tier1_final: "1/5/2024",
        claiming_expire: "1/6/2025"
    },
    {
        contract: "0x6521B0e9f697c9eb8a8e33743b843bF5b8d0822c",
        title:"Four-Fifty Miles to Freedom",
        creation: "12/6/2024",
        tier1_final: "1/5/2024",
        claiming_expire: "1/6/2025"
    },
    {
        contract: "0x290d65836FF3ccBe27E68Df92aeaE770eDa34945",
        title:"Silas Marner",
        creation: "12/6/2024",
        claiming_expire: "12/30/2024"
    },
    {
        contract: "0x7218D65DFDc072A7D93F07E20FA0b92Bf9A2Ef27",
        title:"The Coming People",
        creation: "11/26/2024",
        tier1_final: "12/29/2024", 
        tier2_start: "12/30/2024", 
        tier2_final: "1/12/2025", 
        claiming_expire: "1/13/2025"
    },
    {
        contract: "0xBA64a0e4586684e71dA251Ea7391E870d37b501b",
        title:"The Worm Ouroboros",
        creation: "11/26/2024",
        tier1_final: "12/29/2024", 
        tier2_start: "12/30/2024", 
        tier2_final: "1/12/2025", 
        claiming_expire: "1/13/2025"
    },
    {
        contract: "0xaA7EE381AD00cb3d5BB104525541eEc8CCd71cA8",
        title:"Book of Dragons",
        creation: "11/25/2024",
        tier1_final: "12/22/2024", 
        tier2_start: "12/23/2024", 
        tier2_final: "1/5/2025", 
        claiming_expire: "1/6/2025"
    },
    {
        contract: "0xbeB61c9d0d3bB2A63CB36252E3497d09aEBBB172",
        title:"Death of the Lion",
        creation: "11/25/2024",
        tier1_final: "12/22/2024", 
        tier2_start: "12/23/2024", 
        tier2_final: "1/5/2025", 
        claiming_expire: "1/6/2025"
    },
]


function displayData() {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';
  
    data.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'data-item'; 
      itemDiv.innerHTML = `
  <h2><a href="https://vechainstats.com/account/${item.contract}">${item.title}</a></h2>
  <ul>
    ${item.creation ? `<li><strong>Creation Date:</strong> ${item.creation}</li>` : ''}
    ${item.tier1_final ? `<li><strong>Tier 1 Final Day:</strong> ${item.tier1_final}</li>` : ''}
    ${item.tier2_start ? `<li><strong>Tier 2 Start Date:</strong> ${item.tier2_start}</li>` : ''}
    ${item.tier2_final ? `<li><strong>Tier 2 Final Day:</strong> ${item.tier2_final}</li>` : ''}
    ${item.tier3_final ? `<li><strong>Tier 3 Final Day:</strong> ${item.tier3_final}<li>` : ''}
    ${item.claiming_expire ? `<li><strong>Claiming Expire:</strong> ${item.claiming_expire}</li>` : ''}
    
  </ul>
`;
  
      dataContainer.appendChild(itemDiv);
    });
  }
  
  displayData();