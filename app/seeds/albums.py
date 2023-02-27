from app.models import db, Image, Album, environment, SCHEMA


def seed_albums():
    image1 = Image(
        user_id=1,
        url="https://d3a5ukb11xbbmk.cloudfront.net/eclipse.jpeg",
        title="Eclipse",
        description="2017 Eclipse",
        tags='eclipse, 2017, solar',
    )
    image2 = Image(
        user_id=1,
        url="https://d3a5ukb11xbbmk.cloudfront.net/heart.jpg",
        title="Heart Nebula",
        description="Heart Nebula",
        tags='nebula, heart, space',
    )
    image3 = Image(
        user_id=1,
        url="https://d3a5ukb11xbbmk.cloudfront.net/m51.jpg",
        title="Whirlpool Galaxy",
        description="Whirlpool Galaxy",
        tags='galaxy, whirlpool, space',
    )
    image4 = Image(
        user_id=1,
        url="https://d3a5ukb11xbbmk.cloudfront.net/ngc7000sho+2.jpg",
        title="North America Nebula",
        description="North America Nebula",
        tags='nebula, north america, space',
    )
    image5 = Image(
        user_id=1,
        url="https://d3a5ukb11xbbmk.cloudfront.net/orion.jpg",
        title="Orion Nebula",
        description="Orion Nebula",
        tags='nebula, orion, space',
    )
    image6 = Image(
        user_id=1,
        url="https://d3a5ukb11xbbmk.cloudfront.net/sunflower+galaxy.jpg",
        title="Sunflower Galaxy",
        description="Sunflower Galaxy",
        tags='galaxy, sunflower, space',
    )
    image7 = Image(
        user_id=1,
        url="https://d3a5ukb11xbbmk.cloudfront.net/cold1.jpeg",
        title="Coldplay",
        description="Coldplay Concert",
        tags='concert, coldplay, music',
    )
    image8 = Image(
        user_id=1,
        url="https://d3a5ukb11xbbmk.cloudfront.net/cold2.jpeg",
        title="Coldplay",
        description="Coldplay Concert",
        tags='concert, coldplay, music',
    )
    image9 = Image(
        user_id=1,
        url="https://d3a5ukb11xbbmk.cloudfront.net/cold3.jpeg",
        title="Coldplay",
        description="Coldplay Concert",
        tags='concert, coldplay, music',
    )
    image10 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone1.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image11 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone10.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image12 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone11.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image13 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone12.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image14 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone13.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image15 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone14.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image16 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone15.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image17 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone16.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image18 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone17.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image19 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone18.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image20 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone2.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image21 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone3.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image22 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone4.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image23 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone5.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image24 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone6.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image25 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone7.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image26 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone8.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image27 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/drone9.jpeg",
        title="Drone",
        description="Drone",
        tags='drone, flying, sky',
    )
    image28 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/bee.jpeg",
        title="Bee",
        description="Bee",
        tags='bee, flowers, macro',
    )
    image29 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/bug.jpeg",
        title="Bug on door",
        description="Bug macro",
        tags='bug, macro, flowers',
    )
    image30 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/flower1.jpeg",
        title="Flower",
        description="Flower macro",
        tags='flower, macro, flowers',
    )
    image31 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/flower2.jpeg",
        title="Flower",
        description="Flower macro",
        tags='flower, macro, flowers',
    )
    image32 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/flower3.jpeg",
        title="Flower",
        description="Flower macro",
        tags='flower, macro, flowers',
    )
    image33 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/flower4.jpeg",
        title="Flower",
        description="Flower macro",
        tags='flower, macro, flowers',
    )
    image34 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/sunflowers.jpeg",
        title="Sunflowers",
        description="Sunflower field",
        tags='sunflowers, macro, flowers',
    )
    image35 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/tulip1.jpeg",
        title="Tulip",
        description="Tulip macro",
        tags='tulip, macro, flowers',
    )
    image36 = Image(
        user_id=2,
        url="https://d3a5ukb11xbbmk.cloudfront.net/tulip2.jpeg",
        title="Tulip",
        description="Tulip macro",
        tags='tulip, macro, flowers',
    )
    image37 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/grishka1.jpeg",
        title="Grishka",
        description="Grishka",
        tags='grishka, cat, pet',
    )
    image38 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/grishka2.jpeg",
        title="Grishka",
        description="Grishka",
        tags='grishka, cat, pet',
    )
    image39 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/grishka3.jpeg",
        title="Grishka",
        description="Grishka",
        tags='grishka, cat, pet',
    )
    image40 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/grishka4.jpeg",
        title="Grishka",
        description="Grishka",
        tags='grishka, cat, pet',
    )
    image41 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/grishka5.jpeg",
        title="Grishka",
        description="Grishka",
        tags='grishka, cat, pet',
    )
    image42 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/grishka6.jpeg",
        title="Grishka",
        description="Grishka",
        tags='grishka, cat, pet',
    )
    image43 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/grishka7.jpeg",
        title="Grishka",
        description="Grishka",
        tags='grishka, cat, pet',
    )
    image44 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/sunset1.jpeg",
        title="Sunset",
        description="Sunset",
        tags='sunset, water, sky',
    )
    image45 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/sunset2.jpeg",
        title="Sunset",
        description="Sunset",
        tags='sunset, water, sky',
    )
    image46 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/sunset3.jpeg",
        title="Sunset",
        description="Sunset",
        tags='sunset, water, sky',
    )
    image47 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/sunset4.jpeg",
        title="Sunset",
        description="Sunset",
        tags='sunset, water, sky',
    )
    image48 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/sunset5.jpeg",
        title="Sunset",
        description="Sunset",
        tags='sunset, water, sky',
    )
    image49 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/sunset6.jpeg",
        title="Sunset",
        description="Sunset",
        tags='sunset, water, sky',
    )
    image50 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/arizona.jpeg",
        title="Arizona",
        description="Arizona",
        tags='arizona, travel, desert',
    )
    image51 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/bahamas.jpeg",
        title="Bahamas",
        description="Bahamas",
        tags='bahamas, travel, beach',
    )
    image52 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/canada.jpeg",
        title="Canada",
        description="Canada",
        tags='canada, travel, mountains',
    )
    image53 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/canada2.jpeg",
        title="Canada",
        description="Canada",
        tags='canada, travel, mountains',
    )
    image54 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/glacier.jpeg",
        title="Glacier",
        description="Glacier",
        tags='glacier, travel, mountains',
    )
    image55 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/glacier2.jpeg",
        title="Glacier",
        description="Glacier",
        tags='glacier, travel, mountains',
    )
    image56 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/glacier3.jpeg",
        title="Glacier",
        description="Glacier",
        tags='glacier, travel, mountains',
    )
    image57 = Image(
        user_id=3,
        url="https://d3a5ukb11xbbmk.cloudfront.net/vermont.jpeg",
        title="Vermont",
        description="Vermont",
        tags='vermont, travel, mountains',
    )

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)
    db.session.add(image10)
    db.session.add(image11)
    db.session.add(image12)
    db.session.add(image13)
    db.session.add(image14)
    db.session.add(image15)
    db.session.add(image16)
    db.session.add(image17)
    db.session.add(image18)
    db.session.add(image19)
    db.session.add(image20)
    db.session.add(image21)
    db.session.add(image22)
    db.session.add(image23)
    db.session.add(image24)
    db.session.add(image25)
    db.session.add(image26)
    db.session.add(image27)
    db.session.add(image28)
    db.session.add(image29)
    db.session.add(image30)
    db.session.add(image31)
    db.session.add(image32)
    db.session.add(image33)
    db.session.add(image34)
    db.session.add(image35)
    db.session.add(image36)
    db.session.add(image37)
    db.session.add(image38)
    db.session.add(image39)
    db.session.add(image40)
    db.session.add(image41)
    db.session.add(image42)
    db.session.add(image43)
    db.session.add(image44)
    db.session.add(image45)
    db.session.add(image46)
    db.session.add(image47)
    db.session.add(image48)
    db.session.add(image49)
    db.session.add(image50)
    db.session.add(image51)
    db.session.add(image52)
    db.session.add(image53)
    db.session.add(image54)
    db.session.add(image55)
    db.session.add(image56)
    db.session.add(image57)
    db.session.commit()

    album1 = Album(
        user_id=1,
        name='Astrophotography',
        description='Astrophotography',
        images=[image1, image2, image3, image4, image5, image6]
    )
    album2 = Album(
        user_id=1,
        name='Coldplay Concert',
        description='Coldplay Concert',
        images=[image7, image8, image9]
    )
    album3 = Album(
        user_id=2,
        name='Drone Photography',
        description='Drone Photography',
        images=[image10, image11, image12, image13, image14, image15, image16, image17, image18,
                image19, image20, image21, image22, image23, image24, image25, image26, image27]
    )
    album4 = Album(
        user_id=2,
        name='Macro Photography',
        description='Macro Photography',
        images=[image28, image29, image30, image31,
                image32, image33, image34, image35, image36]
    )
    album5 = Album(
        user_id=3,
        name='Grishka',
        description='Grishka',
        images=[image37, image38, image39, image40, image41, image42, image43]
    )
    album6 = Album(
        user_id=3,
        name='Sunset',
        description='Sunsets',
        images=[image44, image45, image46, image47, image48, image49]
    )
    album7 = Album(
        user_id=3,
        name='Travel',
        description='Travel',
        images=[image50, image51, image52, image53,
                image54, image55, image56, image57]
    )

    db.session.add(album1)
    db.session.add(album2)
    db.session.add(album3)
    db.session.add(album4)
    db.session.add(album5)
    db.session.add(album6)
    db.session.add(album7)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the albums table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_albums():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.albums RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM albums")

    db.session.commit()
