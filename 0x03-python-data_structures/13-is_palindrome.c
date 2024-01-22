#include "lists.h"

/**
 * palindrome - recursive palind or not
 * @head: the head list
 * Return: 0 if not a palindrome, 1 if a palindrome
*/

int is_palindrome(listint_t **head)
{
	if (head == NULL || *head == NULL)
		return (1);
	return (aux_palind(head, * head));
}

/**
 * aux_palind - function to know if it is palindrome
 * @head: the head list
 * @end: the end list
*/
int aux_palind(listint_t **head, listint_t *end)
{
	if (end == NULL)
		return (1);
	if (aux_palind(head, end->next) && (*head)->n == end->n)
	{
		*head = (*head)->next;
		return (1);
	}
	return (0);
}
