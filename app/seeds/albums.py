from app.models import db, Image, Album, environment, SCHEMA


def seed_albums():
    image1 = Image(
        user_id=1,
        url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        title="Sunset",
        description="Sunset over the water",
        tags='sunset, water, beach',
    )
    image2 = Image(
        user_id=1,
        url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        title="Sunset",
        description="Sunset over the water",
        tags='sunset, water, beach',
    )
    image3 = Image(
        user_id=2,
        url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        title="Sunset",
        description="Sunset over the water",
        tags='sunset, water, beach',
    )
    image4 = Image(
        user_id=2,
        url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        title="Sunset",
        description="Sunset over the water",
        tags='sunset, water, beach',
    )
    image5 = Image(
        user_id=3,
        url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        title="Sunset",
        description="Sunset over the water",
        tags='sunset, water, beach',
    )
    image6 = Image(
        user_id=3,
        url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        title="Sunset",
        description="Sunset over the water",
        tags='sunset, water, beach',
    )


    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)


    album1 = Album(
        user_id=1,
        name='Sunset',
        description='Sunset over the water',
        images=[image1, image2]
        )
    album2 = Album(
        user_id=2,
        name='Sunset',
        description='Sunset over the water',
        images=[image3, image4]
        )
    album3 = Album(
        user_id=3,
        name='Sunset',
        description='Sunset over the water',
        images=[image5, image6]
        )


    db.session.add(album1)
    db.session.add(album2)
    db.session.add(album3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the albums table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_albums():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.albums RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM albums")

    db.session.commit()
