<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<?php query_posts('cat=4'); ?>

<?php if (have_posts()) : query_posts('cat=4');
  while  (have_posts()) : the_post(); ?>

    <?php the_title(); ?>
    <?php the_content(); ?>
<?php endwhile; endif; wp_reset_query(); ?>
