from app.models import db, Comment, environment, SCHEMA

def seed_comments():
    comment1 = Comment(
        user_id=1, image_id=1, comment="I love this photo 1!"
    )
    comment2 = Comment(
        user_id=2, image_id=1, comment="I love this photo 2!"
    )
    comment3 = Comment(
        user_id=3, image_id=1, comment="I love this photo 3!"
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)

    db.session.commit()

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()
