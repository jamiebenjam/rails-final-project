require 'faker'
puts 'Seeding Data...'


u1 = User.create(
    username: 'kingshady42', 
    password: 'IdkTbh42@', 
    password_confirmation: 'IdkTbh42@',
    profile_image: 'data:image/jpeg;base64,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',
    bio: "5'6 and proud of it!",
    first_name: 'Kunj',
    last_name: 'Shah',
    email: 'shahkunj42@gmail.com'
)

u2 = User.create(
    username: 'jamiebenjam', 
    password: 'Flatiron420!', 
    password_confirmation: 'Flatiron420!',
    profile_image: 'data:image/jpeg;base64,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',
    bio: "5'6 and ashamed of it!",
    first_name: 'Jamie',
    last_name: 'Benjamin',
    email: 'jamiebenjamin@gmail.com'
)

u3 = User.create(
    username: 'mpg', 
    password: 'Passw0rd!', 
    password_confirmation: 'Passw0rd!',
    profile_image: 'https://media-exp1.licdn.com/dms/image/C4E03AQF4NDCZpts22g/profile-displayphoto-shrink_200_200/0/1657653246915?e=1666828800&v=beta&t=y9TCItYe10XHU965m9FagW1nMRYZd4QzUgqnXc_wO1g',
    bio: "Flation Fullstack Developer",
    first_name: 'Marcus',
    last_name: 'Parker-Garruba',
    email: '35mpg@gmail.com'
)

u4 = User.create(
    username: 'sleepymcgee', 
    password: 'Bl@z3it420', 
    password_confirmation: 'Bl@z3it420',
    profile_image: 'https://miro.medium.com/fit/c/176/176/1*ECWvYDZkfG5SXGoov5DqOA.jpeg',
    bio: "Tired but functioning",
    first_name: 'Adriana',
    last_name: 'Mcgee',
    email: 'adrianamcgee@gmail.com'
)

20.times do
    Cheep.create(
        cheep: Faker::Quote.yoda,
        likers_count: 0,
        user_id: rand(1..4)
    )
end 

u1.follow!(u2)
u1.follow!(u3)
u1.follow!(u4)
u2.follow!(u1)
u2.follow!(u3)
u2.follow!(u4)
u3.follow!(u1)
u3.follow!(u2)
u3.follow!(u4)
u4.follow!(u1)
u4.follow!(u2)
u4.follow!(u3)

puts 'SuccSEEDed'