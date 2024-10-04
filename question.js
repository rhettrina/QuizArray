let questions = [
    {
        numb: 1,
        question: "What is the primary cause of global warming?",
        answer: "Greenhouse gas emissions",
        options: [
            "Deforestation",
            "Greenhouse gas emissions",
            "Ozone depletion",
            "Volcanic eruptions"
        ]
    },
    {
        numb: 2,
        question: "Which gas is most responsible for the greenhouse effect?",
        answer: "Carbon dioxide",
        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon dioxide",
            "Hydrogen"
        ]
    },
    {
        numb: 3,
        question: "What is the main source of energy for the Earth's climate system?",
        answer: "The Sun",
        options: [
            "The Moon",
            "The Sun",
            "The Earth's core",
            "Ocean currents"
        ]
    },
    {
        numb: 4,
        question: "Which of the following is a renewable energy source?",
        answer: "Solar power",
        options: [
            "Coal",
            "Natural gas",
            "Nuclear power",
            "Solar power"
        ]
    },
    {
        numb: 5,
        question: "What is the process by which plants make their own food?",
        answer: "Photosynthesis",
        options: [
            "Respiration",
            "Photosynthesis",
            "Transpiration",
            "Fermentation"
        ]
    },
    {
        numb: 6,
        question: "Which layer of the atmosphere contains the ozone layer?",
        answer: "Stratosphere",
        options: [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ]
    },
    {
        numb: 7,
        question: "What is the term for the variety of life in the world or in a particular habitat?",
        answer: "Biodiversity",
        options: [
            "Ecology",
            "Biodiversity",
            "Ecosystem",
            "Habitat"
        ]
    },
    {
        numb: 8,
        question: "Which of the following is a major contributor to ocean pollution?",
        answer: "Plastic waste",
        options: [
            "Plastic waste",
            "Sand",
            "Seaweed",
            "Salt"
        ]
    },
    {
        numb: 9,
        question: "What is the term for the gradual increase in the Earth's temperature due to human activities?",
        answer: "Global warming",
        options: [
            "Climate change",
            "Global warming",
            "Acid rain",
            "El Niño"
        ]
    },
    {
        numb: 10,
        question: "Which of the following is a consequence of deforestation?",
        answer: "Loss of biodiversity",
        options: [
            "Increased rainfall",
            "Loss of biodiversity",
            "Improved air quality",
            "Decreased carbon dioxide levels"
        ]
    },

    {
        numb: 11,
        question: "What is the primary component of smog?",
        answer: "Ground-level ozone",
        options: [
            "Carbon monoxide",
            "Ground-level ozone",
            "Nitrogen",
            "Methane"
        ]
    },
    {
        numb: 12,
        question: "Which phenomenon causes coral bleaching?",
        answer: "Increased water temperatures",
        options: [
            "Decreased water temperatures",
            "Increased water temperatures",
            "Overfishing",
            "Pollution"
        ]
    },
    {
        numb: 13,
        question: "Which practice helps reduce soil erosion?",
        answer: "Terracing",
        options: [
            "Deforestation",
            "Terracing",
            "Monoculture farming",
            "Urbanization"
        ]
    },
    {
        numb: 14,
        question: "What is the term for the contamination of water bodies?",
        answer: "Water pollution",
        options: [
            "Air pollution",
            "Water pollution",
            "Soil pollution",
            "Noise pollution"
        ]
    },
    {
        numb: 15,
        question: "Which gas is primarily responsible for acid rain?",
        answer: "Sulfur dioxide",
        options: [
            "Methane",
            "Sulfur dioxide",
            "Carbon dioxide",
            "Nitrous oxide"
        ]
    },
    {
        numb: 16,
        question: "What is the effect of deforestation on the carbon cycle?",
        answer: "Increased carbon dioxide levels",
        options: [
            "Decreased carbon dioxide levels",
            "Increased carbon dioxide levels",
            "No effect",
            "Increased oxygen levels"
        ]
    },
    {
        numb: 17,
        question: "What is the main threat to polar bears caused by climate change?",
        answer: "Melting sea ice",
        options: [
            "Increased competition",
            "Melting sea ice",
            "More predators",
            "Increased food supply"
        ]
    },
    {
        numb: 18,
        question: "What is the term for the introduction of harmful substances into the environment?",
        answer: "Pollution",
        options: [
            "Conservation",
            "Pollution",
            "Recycling",
            "Erosion"
        ]
    },
    {
        numb: 19,
        question: "What is eutrophication?",
        answer: "Nutrient enrichment in water bodies",
        options: [
            "Soil degradation",
            "Nutrient enrichment in water bodies",
            "Air purification",
            "Deforestation"
        ]
    },
    {
        numb: 20,
        question: "Which of the following is a non-renewable resource?",
        answer: "Coal",
        options: [
            "Solar energy",
            "Wind energy",
            "Coal",
            "Hydropower"
        ]
    },
    {
        numb: 21,
        question: "What is the primary purpose of the Kyoto Protocol?",
        answer: "To reduce greenhouse gas emissions",
        options: [
            "To ban plastic use",
            "To protect endangered species",
            "To reduce greenhouse gas emissions",
            "To promote recycling"
        ]
    },
    {
        numb: 22,
        question: "Which biome is known for having the highest biodiversity?",
        answer: "Tropical rainforest",
        options: [
            "Desert",
            "Tundra",
            "Tropical rainforest",
            "Savanna"
        ]
    },
    {
        numb: 23,
        question: "What is desertification?",
        answer: "The process of fertile land turning into desert",
        options: [
            "The process of desert expansion",
            "The process of fertile land turning into desert",
            "The melting of polar ice caps",
            "The creation of sand dunes"
        ]
    },
    {
        numb: 24,
        question: "Which of the following is a consequence of ocean acidification?",
        answer: "Damage to coral reefs",
        options: [
            "Increase in fish populations",
            "Improved water quality",
            "Damage to coral reefs",
            "Increased salinity"
        ]
    },
    {
        numb: 25,
        question: "What is the role of a decomposer in an ecosystem?",
        answer: "Break down dead organic material",
        options: [
            "Produce energy through photosynthesis",
            "Store carbon dioxide",
            "Break down dead organic material",
            "Control pest populations"
        ]
    },
    {
        numb: 26,
        question: "What is a significant cause of biodiversity loss?",
        answer: "Habitat destruction",
        options: [
            "Reforestation",
            "Habitat destruction",
            "Increased rainfall",
            "Renewable energy use"
        ]
    },
    {
        numb: 27,
        question: "Which of the following gases is not a greenhouse gas?",
        answer: "Oxygen",
        options: [
            "Methane",
            "Carbon dioxide",
            "Water vapor",
            "Oxygen"
        ]
    },
    {
        numb: 28,
        question: "What is the primary method of waste disposal in most developing countries?",
        answer: "Landfilling",
        options: [
            "Recycling",
            "Incineration",
            "Landfilling",
            "Composting"
        ]
    },
    {
        numb: 29,
        question: "Which international agreement aims to phase out the use of CFCs?",
        answer: "Montreal Protocol",
        options: [
            "Paris Agreement",
            "Montreal Protocol",
            "Kyoto Protocol",
            "Basel Convention"
        ]
    },
    {
        numb: 30,
        question: "What is the leading cause of deforestation in the Amazon rainforest?",
        answer: "Cattle ranching",
        options: [
            "Urban development",
            "Logging",
            "Cattle ranching",
            "Mining"
        ]
    },
    {
        numb: 31,
        question: "True or False: The ozone layer protects the Earth from harmful ultraviolet radiation.",
        answer: "True",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 32,
        question: "True or False: Renewable energy sources can be depleted over time.",
        answer: "False",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 33,
        question: "True or False: Deforestation contributes to increased carbon dioxide levels in the atmosphere.",
        answer: "True",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 34,
        question: "True or False: Acid rain is caused by emissions of sulfur dioxide and nitrogen oxides.",
        answer: "True",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 35,
        question: "True or False: Plastic debris is not harmful to marine life.",
        answer: "False",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 36,
        question: "True or False: Global temperatures have remained stable over the past century.",
        answer: "False",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 37,
        question: "True or False: Overfishing can lead to the collapse of fish populations.",
        answer: "True",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 38,
        question: "True or False: The greenhouse effect is entirely a man-made phenomenon.",
        answer: "False",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 39,
        question: "True or False: Invasive species can harm native ecosystems.",
        answer: "True",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 40,
        question: "True or False: Conservation efforts can help restore endangered species populations.",
        answer: "True",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 41,
        question: "True or False: The melting of polar ice caps contributes to rising sea levels.",
        answer: "True",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 42,
        question: "True or False: Composting is an effective way to reduce household waste.",
        answer: "True",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 43,
        question: "True or False: Photosynthesis increases atmospheric carbon dioxide levels.",
        answer: "False",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 44,
        question: "True or False: Urbanization has no impact on local wildlife.",
        answer: "False",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 45,
        question: "True or False: The conservation of wetlands is important for biodiversity.",
        answer: "True",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 46,
        question: "True or False: All fossil fuels are renewable resources.",
        answer: "False",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 47,
        question: "True or False: Overpopulation can lead to increased environmental degradation.",
        answer: "True",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 48,
        question: "True or False: Biomagnification refers to the decrease of toxins as they move up the food chain.",
        answer: "False",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 49,
        question: "True or False: Freshwater is an unlimited resource on Earth.",
        answer: "False",
        options: [
            "True",
            "False"
        ]
    },
    {
        numb: 50,
        question: "True or False: Reforestation can help combat climate change by absorbing carbon dioxide from the atmosphere.",
        answer: "True",
        options: [
            "True",
            "False"
        ]
    }
];
