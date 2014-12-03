# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
	daniel = User.create(username: "Daniel", biography: "Daniel graduated from UC Berkeley in 2014 with a degree in Political Science. A journeyman always ready for an adventure, Daniel traveled with Cirque du Soleil's Ovo for a year and a half where he managed temp hires and loaded 53 foot trucks. Daniel has also worked for two years in the casino and gaming industry. He is excited to transition into software and web development.", password: "daniel")

  worf = User.create(username: "Commander Worf", biography: "Worf, son of Mogh, is a Klingon and chief security officer aboard the USS Enterprise D. A skilled practitioner of the bat'leth, he is a frequent participant in combat tournaments. In his free time he enjoys drinking prune juice.", picture_url: "http://www.trekmate.org.uk/wp-content/uploads/2013/05/worfwill.jpg",password: "iamworf")

  vader = User.create(username: "Darth Vader", biography: "I am Lord Vader. I have come to Earth to witness Star Wars Episode 7: The Forth Awakens. Coming to a theatre near you December, 2015. This movie is directed by JJ Abrams. Expect lens flares.", picture_url: "http://www.topdesignmag.com/wp-content/uploads/2011/07/64.png", password: "darthvader")

  kenobe = User.create(username: "Ben Kenobe", biography: "The force is strong", picture_url: "http://images4.fanpop.com/image/photos/24000000/Ben-Kenobi-ben-kenobi-24018429-447-335.jpg", password: "starwars")
	
	picard = User.create(username: "Captain Picard", biography: "My real name is Patrick Stewart. Wouldn't you like a cup of Earl Grey tea? When I'm not playing the role of Captain Picard, I am Professor X. Previously I moonlighted with Ian McKellan as a Shakespearean actor.", picture_url: "http://fierceandnerdy.com/wp-content/uploads/2012/01/Picard2379.jpg",password: "captain")

	quark = User.create(username: "Quark", biography: "Let me tell you something about Hew-mons, Nephew. They're a wonderful, friendly people, as long as their bellies are full and their holosuites are working. But take away their creature comforts, deprive them of food, sleep, sonic showers, put their lives in jeopardy over an extended period of time and those same friendly, intelligent, wonderful people... will become as nasty and as violent as the most bloodthirsty Klingon. You don't believe me? Look at those faces. Look in their eyes.", picture_url: "http://persephonemagazine.com/wp-content/uploads/2012/07/quark.gif", password: "iamquark")

	hanssolo = User.create(username: "Hans Solo", biography: "Damnit Chewy! We're gonna need a faster ship", picture_url: "http://img2.wikia.nocookie.net/__cb20080705234747/darth/images/d/d0/Han_solo.jpg", password: "hanssolo")

	kirk = User.create(username: "Captain Kirk", biography: "Space the final frontier...", picture_url: "http://www.hoolinet.com/Portals/0/Captainkirk.jpg", password: "captainkirk")

	borg = User.create(username: "The Borg", biography: "We are the borg. Your biological and technological distinctiveness will be added to our own. Resistance is futile.", picture_url: "http://www.startrek.com/uploads/assets/articles/8_voice.jpg", password:"theborg")

	wookies = User.create(username: "Wookies", picture_url: "http://www.tk1336.com/pictures/wicketewok.jpg", biography: "We own the night. Rawr. Nom Nom Nom Nom.", password: "wookies")

	cupidarrow = daniel.locations.create(title:"cupids arrow", description:"As you make you along the Embarcadero towards ATT Park or Fisherman's Wharf, perhaps you will notice this colorful sculpture. What a better place to take your date or even pop that magical question? Backlit by the recently installed light display on the Bay Bridge, enjoy the wonderful restaurants nearby which include, 'The Waterbar', 'Palamino', and 'Chiya Brasserie'.", address: "1 Folsom St, San Francisco, CA", price: 0)

# {image_url: ""}
# location_pictures.create([	])

	cupidarrow.location_pictures.create([
		{image_url: "http://www.jamesfike.com/wordpress_iRq1/wp-content/uploads/2011/11/20111118-IMG_5560And8more_tonemapped_poster.jpg"}, 
		{image_url: "http://upload.wikimedia.org/wikipedia/commons/d/df/View_of_Yerba_Buena_Island,_Bay_Bridge.jpg"}, 
		{image_url: "http://1.bp.blogspot.com/-kC0KJzfxBIE/Te-R4f3OEeI/AAAAAAAAADc/cdte8o-DQk8/s1600/BW+bow+and+arrow.jpg"},
		{image_url: "http://static.squarespace.com/static/52c0d31ae4b0803bf7e95f36/t/5356dbbfe4b00e0623584c32/1402359939917/waterbar-baylights-1-retouched.jpg?format=1500w"},
		{image_url: "http://insidescoopsf.sfgate.com/files/2011/08/waterbar.jpg"},
		{image_url: "http://www.cuesa.org/sites/default/files/market_parking_map_0.jpg"}
		])

	cupidarrow.reviews.create(user_id: vader.id, rating: 1, body: "Love is a pittence compared to the strength of the dark side. The meek cling on to it as their last vestige of hope.")

  cupidarrow.reviews.create(user_id: kenobe.id, rating: 5, body: "Will you be quiet Anakin! We're no longer in our universe. The force is strong at the 'House of Air'.")


	crissy_field = wookies.locations.create(title:"Crissy Field", description:"A nice place where you can take a relaxing stroll, hop aboard a yacht, or visit the 'House of Air' and get your hangtime on. Beware of the wookies coming out at night.", address: "Crissy Field, San Francisco, CA", price: 33)

	crissy_field.location_pictures.create([
		{image_url: "http://caliban.lbl.gov/panoramas/san_francisco/city_overlook.jpg"},
		{image_url: "http://4.bp.blogspot.com/-v9tlBbXhxGc/UhEHiTkCHMI/AAAAAAAADFI/ye4b_gmydQo/s1600/photo+%252844%2529.JPG"},
		{image_url: "http://www.jettingaround.com/wp-content/uploads/2013/01/SF-Crissy-Field.jpg"},
		{image_url: "http://www.amusingquest.com/photos/AQ_322_housair1.jpg"},
		{image_url: "http://static.panoramio.com/photos/large/18368134.jpg"}
		])

	gg_park = wookies.locations.create(title:"Golden Gate Park", description:"This park is very big. Not to be confused with the Presidio and it's California Redwood-like trees, Golden Gate Park houses the California Academy of Science and wondrous botannical gardens. On Thursday nights, cocktails and hor dourves are served while you play with the animals. There was a chainsaw incident a few years ago though...", address: "Golden Gate Park, San Francisco, CA",price: 33)

  gg_park.location_pictures.create([
  	{image_url: "http://upload.wikimedia.org/wikipedia/commons/7/78/Golden_Gate_Park_-_Spreckels_Temple_of_Music_02.jpg"},
    {image_url: "https://buchanansf.files.wordpress.com/2010/10/teagarden-pagodas.jpg"},
    {image_url: "http://upload.wikimedia.org/wikipedia/commons/4/4a/SF_Conservatory_of_Flowers_3.jpg"},
    {image_url: "http://conexaomundo.com.br/wp-content/uploads/2013/11/golden-gate-park-san-francisco-coenxao-mundo-3.jpg"},
    {image_url: "http://www.garywaldeck.org/Napa/IMG_7550.JPG"}
  ])

  presidio = wookies.locations.create(title:"The Presidio", description:"On clear days the view of the Golden Gate Bridge is spectacular. Come on Sundays to enjoy the festive Off the Grid foodtrucks. If you get a change, take a tour of Industrial Light and Magic (ILM) producers of the movie special effects. There's also a statue of Yoda somewhere... ", address: "The Presidio, San Francisco, CA", price: 33)

  presidio.location_pictures.create([	
    {image_url: "http://ad009cdnb.archdaily.net/wp-content/uploads/2013/05/1368133484-presidio-from-southeast.jpg"},
    {image_url: "http://institute.presidio.gov/SiteCollectionImages/MainPost_01a.jpg"},
    {image_url: "http://www.woohoo.org/presidiorx/maps/presidiodetails.gif"},
    {image_url: "http://www.jtang.org/california-2010/california-2010-Images/12.jpg"},
    {image_url: "http://2.bp.blogspot.com/--rurDhukLe8/UYks6DB2JuI/AAAAAAAACL8/FJSX1AG1Qag/s1600/IMG_3979.jpg"},
  ])

	# rake db:seed
	# heroku run rake db:seed
end