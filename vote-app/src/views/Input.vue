<template>
  <form id="contact-form" action="script.php" method="post">
    <input type="hidden" name="redirect" value="http://www.opera.com" />
    <div class="noneLabel">
        <ul>
            <li>
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" value="" />
            </li>
            <li>
                <label for="email">Email:</label>
                <input type="text" name="email" id="email" value="" />
            </li>
            <li>
                <label for="comments">Comments:</label>
                <textarea name="comments" id="comments" cols="25" rows="3"></textarea>
            </li>
            <li>
                <input type="submit" value="submit" />
                <input type="reset" value="reset" />
            </li>
        </ul>
    </div>
</form>
</template>

<style scoped>
    ul {
        list-style-type: none;
        }


</style>