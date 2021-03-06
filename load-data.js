let images = [
	{src: 'img/3rd-avenue-night.jpg', width: 3630, height: 2999, filename: '3rd-avenue-night', name: '3rd Avenue Night', date: 1597281058, object: new Image()},
	{src: 'img/berkeley-sunset.jpg', width: 4608, height: 3333, filename: 'berkeley-sunset', name: 'Berkeley Sunset', date: 1511399844, object: new Image()},
	{src: 'img/blue-ridge-bonfire.jpg', width: 3000, height: 3749, filename: 'blue-ridge-bonfire', name: 'Blue Ridge Bonfire', date: 1597281058, object: new Image()},
	{src: 'img/broken-car.jpg', width: 4032, height: 3024, filename: 'broken-car', name: 'Broken Car', date: 1567288396, object: new Image()},
	{src: 'img/capitol-building.jpg', width: 2000, height: 1500, filename: 'capitol-building', name: 'Capitol Building', date: 1392593280, object: new Image()},
	{src: 'img/car-sunset.jpg', width: 4032, height: 3024, filename: 'car-sunset', name: 'Car Sunset', date: 1566962130, object: new Image()},
	{src: 'img/central-park-reflection.jpg', width: 4032, height: 3024, filename: 'central-park-reflection', name: 'Central Park Reflection', date: 1575180290, object: new Image()},
	{src: 'img/central-park-waterfall.jpg', width: 3588, height: 3000, filename: 'central-park-waterfall', name: 'Central Park Waterfall', date: 1597281058, object: new Image()},
	{src: 'img/chalkboard-pano.jpg', width: 14336, height: 2317, filename: 'chalkboard-pano', name: 'Chalkboard Pano', date: 1542092535, object: new Image()},
	{src: 'img/clouds.jpg', width: 1080, height: 810, filename: 'clouds', name: 'Clouds', date: 1408307642, object: new Image()},
	{src: 'img/covid-mask.jpg', width: 4032, height: 3024, filename: 'covid-mask', name: 'Covid Mask', date: 1586393285, object: new Image()},
	{src: 'img/east-river-skyline.jpg', width: 3736, height: 2802, filename: 'east-river-skyline', name: 'East River Skyline', date: 1493753790, object: new Image()},
	{src: 'img/east-river-sunset.jpg', width: 4032, height: 3024, filename: 'east-river-sunset', name: 'East River Sunset', date: 1487456798, object: new Image()},
	{src: 'img/fireworks.jpg', width: 4000, height: 3000, filename: 'fireworks', name: 'Fireworks', date: 1436060710, object: new Image()},
	{src: 'img/flatiron.jpg', width: 2448, height: 3060, filename: 'flatiron', name: 'Flatiron', date: 1597281058, object: new Image()},
	{src: 'img/forest-pano.jpg', width: 12112, height: 3030, filename: 'forest-pano', name: 'Forest Pano', date: 1490982430, object: new Image()},
	{src: 'img/freedom-tower-night.jpg', width: 2817, height: 3962, filename: 'freedom-tower-night', name: 'Freedom Tower Night', date: 1470964008, object: new Image()},
	{src: 'img/freedom-tower.jpg', width: 4000, height: 3000, filename: 'freedom-tower', name: 'Freedom Tower', date: 1408393322, object: new Image()},
	{src: 'img/hmc-fall.jpg', width: 4032, height: 3024, filename: 'hmc-fall', name: 'HMC Fall', date: 1589259955, object: new Image()},
	{src: 'img/hmc-pink-clouds.jpg', width: 4032, height: 3024, filename: 'hmc-pink-clouds', name: 'HMC Pink Clouds', date: 1580348845, object: new Image()},
	{src: 'img/hmc-sunset-1.jpg', width: 4032, height: 3024, filename: 'hmc-sunset-1', name: 'HMC Sunset 1', date: 1583036853, object: new Image()},
	{src: 'img/hmc-sunset-2.jpg', width: 4032, height: 3024, filename: 'hmc-sunset-2', name: 'HMC Sunset 2', date: 1589259954, object: new Image()},
	{src: 'img/hmc-sunset-3.jpg', width: 4032, height: 3024, filename: 'hmc-sunset-3', name: 'HMC Sunset 3', date: 1589259954, object: new Image()},
	{src: 'img/hmc-sunset-4.jpg', width: 4032, height: 3024, filename: 'hmc-sunset-4', name: 'HMC Sunset 4', date: 1580620291, object: new Image()},
	{src: 'img/hmc-tree-sunny.jpg', width: 3024, height: 4032, filename: 'hmc-tree-sunny', name: 'HMC Tree Sunny', date: 1589259954, object: new Image()},
	{src: 'img/hudson-river-boats.jpg', width: 4018, height: 3014, filename: 'hudson-river-boats', name: 'Hudson River Boats', date: 1470955934, object: new Image()},
	{src: 'img/lake-michigan.jpg', width: 2000, height: 1500, filename: 'lake-michigan', name: 'Lake Michigan', date: 1391985634, object: new Image()},
	{src: 'img/lightning-1.jpg', width: 3898, height: 2193, filename: 'lightning-1', name: 'Lightning 1', date: 1597287645, object: new Image()},
	{src: 'img/lightning-2.jpg', width: 1373, height: 1030, filename: 'lightning-2', name: 'Lightning 2', date: 1597287457, object: new Image()},
	{src: 'img/macro-branch.jpg', width: 4032, height: 3024, filename: 'macro-branch', name: 'Macro Branch', date: 1586749151, object: new Image()},
	{src: 'img/nj-sunset.jpg', width: 4032, height: 3024, filename: 'nj-sunset', name: 'Nj Sunset', date: 1597287192, object: new Image()},
	{src: 'img/nyc-blm-sidewalk.jpg', width: 4032, height: 3024, filename: 'nyc-blm-sidewalk', name: 'NYC BLM Sidewalk', date: 1593800878, object: new Image()},
	{src: 'img/nyc-buildings.jpg', width: 4014, height: 3010, filename: 'nyc-buildings', name: 'NYC Buildings', date: 1588366900, object: new Image()},
	{src: 'img/nyc-night-1.jpg', width: 3587, height: 3000, filename: 'nyc-night-1', name: 'NYC Night 1', date: 1445035941, object: new Image()},
	{src: 'img/nyc-night-2.jpg', width: 3222, height: 3456, filename: 'nyc-night-2', name: 'NYC Night 2', date: 1508711933, object: new Image()},
	{src: 'img/nyc-orange-sunset.jpg', width: 3931, height: 2946, filename: 'nyc-orange-sunset', name: 'NYC Orange Sunset', date: 1483049374, object: new Image()},
	{src: 'img/nyc-red-sunset.jpg', width: 3536, height: 2964, filename: 'nyc-red-sunset', name: 'NYC Red Sunset', date: 1597281058, object: new Image()},
	{src: 'img/nyc-snowy-sidewalk.jpg', width: 4032, height: 3022, filename: 'nyc-snowy-sidewalk', name: 'NYC Snowy Sidewalk', date: 1597281058, object: new Image()},
	{src: 'img/nyc-sunrise.jpg', width: 4601, height: 3451, filename: 'nyc-sunrise', name: 'NYC Sunrise', date: 1509623910, object: new Image()},
	{src: 'img/nyc-sunset-1.jpg', width: 3537, height: 3000, filename: 'nyc-sunset-1', name: 'NYC Sunset 1', date: 1443998656, object: new Image()},
	{src: 'img/nyc-sunset-2.jpg', width: 1991, height: 1493, filename: 'nyc-sunset-2', name: 'NYC Sunset 2', date: 1392348395, object: new Image()},
	{src: 'img/nyc-sunset-3.jpg', width: 4000, height: 3000, filename: 'nyc-sunset-3', name: 'NYC Sunset 3', date: 1453672990, object: new Image()},
	{src: 'img/nyc-sunset-4.jpg', width: 4569, height: 3427, filename: 'nyc-sunset-4', name: 'NYC Sunset 4', date: 1506810042, object: new Image()},
	{src: 'img/nyc-sunset-5.jpg', width: 4000, height: 3000, filename: 'nyc-sunset-5', name: 'NYC Sunset 5', date: 1444602752, object: new Image()},
	{src: 'img/nyc-taxi.jpg', width: 4032, height: 3024, filename: 'nyc-taxi', name: 'NYC Taxi', date: 1586642504, object: new Image()},
	{src: 'img/pitzer-sunset.jpg', width: 4032, height: 3024, filename: 'pitzer-sunset', name: 'Pitzer Sunset', date: 1580182414, object: new Image()},
	{src: 'img/solar-eclipse.jpg', width: 4096, height: 2731, filename: 'solar-eclipse', name: 'Solar Eclipse', date: 1503334435, object: new Image()},
	{src: 'img/southampton-beach.jpg', width: 4032, height: 3022, filename: 'southampton-beach', name: 'Southampton Beach', date: 1597281058, object: new Image()},
	{src: 'img/squirrel.jpg', width: 4608, height: 3456, filename: 'squirrel', name: 'Squirrel', date: 1597281058, object: new Image()},
	{src: 'img/stinson-sunset.jpg', width: 3970, height: 2978, filename: 'stinson-sunset', name: 'Stinson Sunset', date: 1511558135, object: new Image()},
	{src: 'img/walkway.jpg', width: 2000, height: 1500, filename: 'walkway', name: 'Walkway', date: 1391987173, object: new Image()},
	{src: 'img/washington-square-arch.jpg', width: 3024, height: 3779, filename: 'washington-square-arch', name: 'Washington Square Arch', date: 1597281058, object: new Image()},
	{src: 'img/washington-square-snow-trees.jpg', width: 4032, height: 3024, filename: 'washington-square-snow-trees', name: 'Washington Square Snow Trees', date: 1486677116, object: new Image()}
];

images.sort((img1, img2) => Math.random());

for (let image of images) {
	image.object.src = image.src;
}
