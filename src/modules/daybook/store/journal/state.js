

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Nulla fugiat eu nisi esse sunt enim magna dolore in Lorem laboris.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Minim cillum enim quis amet duis voluptate consequat mollit non excepteur cillum elit sunt proident.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Exercitation exercitation aute culpa enim velit laboris qui eiusmod nostrud quis voluptate.',
            picture: null,
        }
    ]
})