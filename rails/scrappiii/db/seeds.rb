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

p1 = Project.create({title: "florida holiday", summary: "a delightful family trip to the disney world", author: "James Scott"})

e1 = Entry.create({title: "Day 1", tagline: "fun fun fun in the sun sun sun", mainPhoto: "http://www.britishairways.com/assets/images/global/components/bodyCopy/240/240x240-florida-sign-getty-157557967_75.jpg", body: "Today we went on holiday to florida. bla bla bla bla bla bla bla bla bla bla bla bla", project_id: p1.id})

e2 = Entry.create({title: "Day 2", tagline: "too many crocs", mainPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Nile_crocodile_head.jpg", body: "there are crocodiles all over the shop. they are quite spooky", project_id: p1.id})

ph1 = Photo.create({title: "Stock photo", link: "https://i.ytimg.com/vi/Y0Ni4S8HuJg/maxresdefault.jpg", description: "spooky crocodile", entry_id: e1.id})

ph2 = Photo.create({title: "Stock photo", link: "https://i.ytimg.com/vi/Y0Ni4S8HuJg/maxresdefault.jpg", description: "spooky crocodile", entry_id: e1.id})

ph3 = Photo.create({title: "Stock photo", link: "https://i.ytimg.com/vi/Y0Ni4S8HuJg/maxresdefault.jpg", description: "spooky crocodile", entry_id: e1.id})

ph4 = Photo.create({title: "Stock photo", link: "https://i.ytimg.com/vi/Y0Ni4S8HuJg/maxresdefault.jpg", description: "spooky crocodile", entry_id: e1.id})

ph5 = Photo.create({title: "Stock photo", link: "http://www.livescience.com/images/i/000/016/951/original/alligator-smiles.JPG?interpolation=lanczos-none&downsize=660:*", description: "spooky crocodile 2", entry_id: e2.id})

ph6 = Photo.create({title: "Stock photo", link: "http://www.livescience.com/images/i/000/016/951/original/alligator-smiles.JPG?interpolation=lanczos-none&downsize=660:*", description: "spooky crocodile 2", entry_id: e2.id})

ph7 = Photo.create({title: "Stock photo", link: "http://www.livescience.com/images/i/000/016/951/original/alligator-smiles.JPG?interpolation=lanczos-none&downsize=660:*", description: "spooky crocodile 2", entry_id: e2.id})

ph8 = Photo.create({title: "Stock photo", link: "http://www.livescience.com/images/i/000/016/951/original/alligator-smiles.JPG?interpolation=lanczos-none&downsize=660:*", description: "spooky crocodile 2", entry_id: e2.id})

c1 = Comment.create({comment: "needs expanding", author: "James Scott", entry_id: e1.id})
c2 = Comment.create({comment: "your shit mate ha ha", author: "big beano", entry_id: e1.id})