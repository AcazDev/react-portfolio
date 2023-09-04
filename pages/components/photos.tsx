const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const drivePhotos = [
    { id: "1ilhCB2Z2PVDkhD8OEBKhjJiOWierTTo1", width: 1080, height: 640, alt:"Robotnik" },
    { id: "1xAU2VNiatABcr8vMxBJ3OqVMcNV3NWNP", width: 1080, height: 1620, alt:"Prof" },
    { id: "1gyllI8OH4SuKXyXr6VhcVsRdHtfgGtx5", width: 1080, height: 640, alt:"Person Nokato" },

    { id: "1dlV8Bueg8z7wsJPtRiOIYTcqP6kDPI_x", width: 1080, height: 1540, alt:"Sara NK" },
    { id: "1xCklL0ctsC1YV62iN6OL7mvespPlbLuw", width: 1080, height: 1540, alt:"My'zix" },
    { id: "1sCCfrA4A6FfKRpL243buXlR8PUg_nho2", width: 1080, height: 1140, alt:"Kaisa" },
    { id: "1DZKa6HY0xYLx1zGGhg5cAz5C_90CfYmj", width: 1080, height: 1180, alt:"Joker-filme" },

    { id: "1DlBt-F7eV7lY91yE50kQWXZU28nqlolJ", width: 1080, height: 694, alt:"hollow-knight" },
    { id: "10KYBaQkhZ2BdQEs8HyHT78jsP6JO7_Yj", width: 1080, height: 1180, alt:"Elijhia NK" },
    { id: "1sQrAP6a4av3qAYPcJBjLzasXaaE0jn2u", width: 1080, height: 720, alt:"El-Gatone" },
    { id: "1HwHlIvlGS_t4M3OEb9oZCbY953lNMvW2", width: 1080, height: 640, alt:"Briggs" },
];

const photos = drivePhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: `https://drive.google.com/uc?export=view&id=${photo.id}`,
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: `https://drive.google.com/uc?export=view&id=${photo.id}`,
                width: breakpoint,
                height,
            };
        }),
    };
    
});

export default photos;