# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Comment.delete_all()
Photo.delete_all()
Entry.delete_all()
Project.delete_all()

p1 = Project.create({title: "Florida Holiday", summary: "A delightful family trip to Disney World", author: "James Scott"})

e1 = Entry.create({title: "Day 1", tagline: "What a long plane journey", mainPhoto: "http://www.britishairways.com/assets/images/global/components/bodyCopy/240/240x240-florida-sign-getty-157557967_75.jpg", body: "Today we went on holiday to florida.  What a long plane journey that was.  After driving to our spacious poolside appartment, we all headed for a snooze to combat the jetlag.", project_id: p1.id})

e2 = Entry.create({title: "Day 2", tagline: "Epcot Center..... more like Epic Center", mainPhoto: "https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/640/360/90/wdpromedia.disney.go.com/media/wdpro-assets/gallery/destinations/epcot/epcot-gallery-00.jpg?01052013114909", body: "Today we went to Epcot Center to see the giant golf ball.  It looked incredible from the monorail.", project_id: p1.id})

ph1 = Photo.create({title: "Stock photo", link: "https://i.ytimg.com/vi/Y0Ni4S8HuJg/maxresdefault.jpg", description: "spooky crocodile", entry_id: e1.id})

ph2 = Photo.create({title: "Stock photo", link: "https://i.ytimg.com/vi/Y0Ni4S8HuJg/maxresdefault.jpg", description: "spooky crocodile", entry_id: e1.id})

ph3 = Photo.create({title: "Stock photo", link: "https://i.ytimg.com/vi/Y0Ni4S8HuJg/maxresdefault.jpg", description: "spooky crocodile", entry_id: e1.id})

ph4 = Photo.create({title: "Stock photo", link: "https://i.ytimg.com/vi/Y0Ni4S8HuJg/maxresdefault.jpg", description: "spooky crocodile", entry_id: e1.id})

ph5 = Photo.create({title: "Stock photo", link: "http://www.livescience.com/images/i/000/016/951/original/alligator-smiles.JPG?interpolation=lanczos-none&downsize=660:*", description: "spooky crocodile 2", entry_id: e2.id})

ph6 = Photo.create({title: "Stock photo", link: "http://www.livescience.com/images/i/000/016/951/original/alligator-smiles.JPG?interpolation=lanczos-none&downsize=660:*", description: "spooky crocodile 2", entry_id: e2.id})

ph7 = Photo.create({title: "Stock photo", link: "http://www.livescience.com/images/i/000/016/951/original/alligator-smiles.JPG?interpolation=lanczos-none&downsize=660:*", description: "spooky crocodile 2", entry_id: e2.id})

ph8 = Photo.create({title: "Stock photo", link: "http://www.livescience.com/images/i/000/016/951/original/alligator-smiles.JPG?interpolation=lanczos-none&downsize=660:*", description: "spooky crocodile 2", entry_id: e2.id})

c1 = Comment.create({comment: "Looks super fun, I'm so jealous", author: "Gran", entry_id: e1.id})
c2 = Comment.create({comment: "Wish you were here gran!!!!", author: "James", entry_id: e1.id})
c3 = Comment.create({comment: "Wow, that is a fairly sizeable ball.", author: "Big Beano", entry_id: e2.id})